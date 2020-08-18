const PORT=8080;

console.log(process.env.PORT);

const express=require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
const  path=require('path');
const mysql = require('mysql');
const open = require('open');
var multer  = require('multer')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'online_supermarket'
})

var app=express();
app.use(session({secret: "Don't tell anybody",saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/dist/Online-superMarket')));
app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use('/', router);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' ||file.mimetype === "image/jpg" || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post('/api/upload', upload.single('image'), (req,res) => {
    try {
        return res.send({ path: req.file.path , message: "upload success"});
    } catch (error) {
        console.error(error);
    }
});

var theSession;

router.get('/authguard', (req,res)=>{
    sess = req.session;
    if (sess.user && sess.user.isLoggedIn ){
        res.send(sess) 
    } 
    else
    res.send({massage: "NOT Auth"})
})

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.send({message: "Success logout"})
    });
});

app.post('/login', (req,res) => {
    var mail = req.body.mail;
    var pass = req.body.password;
    pool.query(' select * from customers WHERE mail=? and password=? ',[mail, pass],(err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else{
            console.log("sql"+JSON.stringify(rows))
            if (rows && rows.length != 0) {
                req.session.user = {
                    isLoggedIn: true,
                    customer_id: rows[0].customer_id,
                    first_name: rows[0].first_name,
                    last_name: rows[0].last_name,
                    manager: rows[0].isManager,
                    city: rows[0].city,
                    street: rows[0].street
                }   
            console.log("Session ID: "+req.session.id);
            res.send({data: req.session.user, user: rows[0]});
            }
            else
            res.send({message: 'User not exists'})
        }
       
    })
})

app.get('/cities', (req,res) => {
    pool.query(' select * from cities', (err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else
        res.send(rows);
    })
})

app.get('/products', (req,res) => {
    if (Object.keys(req.query).length === 0) {
         pool.query(' select * from products ', (err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else
        res.send(rows);
      })
    }
    if (req.query.category_id) {
        pool.query('SELECT * from products WHERE category_id=?',[req.query.category_id], (err,rows)=>{
            if (err) {
                console.log(err);
                res.send("Error in Server")
            }
            else
            res.send(rows);
          })
    }
});

app.get('/productsNumber', (req,res) => {
         pool.query(' SELECT COUNT(product_id) as count FROM Products', (err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else
        res.send(JSON.stringify(rows[0].count));
      })
});

app.get('/search', (req,res)=>{
    if (req.query) {
        console.log(req.query.product_name)
        pool.query(`SELECT * FROM products WHERE product_name like "%${req.query.product_name}%"`, (err,rows)=>{
            if (err) {
                console.log(err);
                res.send("Error in Server")
            }
            else
            res.send(rows);
        })
    }
})

app.get('/ordersNumber', (req,res) => {
    pool.query(' SELECT COUNT (order_id) as count FROM orders', (err,rows)=>{
   if (err) {
       console.log(err);
       res.send("Error in Server")
   }
   else
   res.send(JSON.stringify(rows[0].count));
 })
});


app.get('/customers/:customer_id', (req,res)=>{
    pool.query(' SELECT * FROM customers WHERE customer_id=?',[req.params.customer_id], (err,rows)=>{ 
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else
        res.send(rows);
      })
})

app.get('/openCart', (req,res)=>{
    if (req.session.user) 
        var customer_id = req.session.user.customer_id;
        pool.query('SELECT * FROM `carts` WHERE `customer_id`=? and cart_id= (SELECT MAX(`cart_id`) from carts where customer_id =?)',[customer_id, customer_id], (err,rows)=>{ 
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else
        res.send(rows);
      })
})

app.get('/productsCart/:id', (req,res)=>{
    var cart_id= req.params.id;
    pool.query('SELECT cp.cp_id, cp.product_id, cp.amount, cp.total_price, cp.cart_id, p.product_name, p.img FROM cart_products cp JOIN products p ON cp.product_id =p.product_id WHERE cart_id=?',
     [cart_id], (err, rows)=>{
         if (err) {
            console.log(err);
            res.send("Error in Server");
         }
         res.send(rows);
     })
})

app.get('/totalPrice/:id', (req,res)=>{
    cart_id = req.params.id;
    pool.query('SELECT SUM(total_price) as total FROM cart_products WHERE cart_id=?', [cart_id], (err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server");
         }
         res.send(rows);
    })
})

app.get('/date/:date', (req,res)=>{
    var date = req.params.date;
    pool.query('SELECT * FROM `orders` WHERE `shipping_date`=?', [date], (err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server");
        }
        res.send(rows);
    })
})
app.post('/newCustomer', (req,res)=>{
    var r = req.body;
    pool.query(' INSERT INTO `customers` (`first_name`, `last_name`, `mail`, `customer_id`, `password`, `city`, `street`) VALUES (? , ? , ? , ? , ? , ? , ?)',
    [r.first_name, r.last_name, r.mail, r.customer_id, r.password, r.city, r.street], (err,rows)=>{
        if (err) { 
            console.log(err);
            res.send("Error in Server")
        }
        else{
            res.send("Post OK");
            console.log("Post OK")
        }
       
      })
})

app.post('/addProduct', (req,res)=>{
    var r = req.body;
    pool.query('INSERT INTO `products` (`product_name`, `category_id`, `price`, `img`) VALUES (?, ?, ?, ?)', [r.product_name, r.category_id, r.price, r.img], 
    (err,rows)=>{
        if (err) { 
            console.log(err);
            res.send("Error in Server")
        }
        else{
            res.send("Post product OK");
            console.log("Post product OK")
        }
    })
})

app.post('/updateProduct', (req,res)=>{
    var r = req.body;
    console.log(r)
    pool.query('UPDATE `products` SET product_name=?, category_id=?, price = ?, img= ?  WHERE `products`.`product_id` = ?', 
    [r.product_name, r.category_id, r.price, r.img, r.product_id], (err,rows)=>{
        if (err) { 
            console.log(err);
            res.send("Error in Server")
        }
        else{
            res.send("Update product OK");
            console.log("Update product OK")
        }
    })
})

app.post('/addProductCart/:id', (req,res)=>{
    console.log(req.body)
    var id = req.params.id;
    var r = req.body;
    var total = r.price*r.quantity;
    pool.query('SELECT * FROM `cart_products` WHERE `product_id`=? and `cart_id`=?', [r.product_id, id], (err,rows)=>{
        if (err) {
            console.log(err);
            res.send("Error in Server")
        }
        else{
            if (rows && rows.length >0){
                var newAm = r.quantity+rows[0].amount;
                var newPrice = total+rows[0].total_price;
                var cp_id = rows[0].cp_id;
                pool.query(`UPDATE cart_products SET amount = ${newAm}, total_price= ${newPrice} WHERE cart_products.cp_id = ${cp_id}`, 
                (error, data)=>{
                    if (error) {
                        console.log(error);
                        res.send("Error in Server")
                    }
                    res.send({message: "Update Success"})
                })
            }
            else{
                pool.query(`INSERT INTO cart_products (product_id, amount, total_price, cart_id) VALUES (${r.product_id}, ${r.quantity}, ${total}, ${id})`, 
                (er,da)=>{ 
                    if (er) {
                        console.log(er);
                        res.send("Error in Server")
                    }
                    else
                    console.log("Success Product Cart")
                    res.send({message: "Success on adding product cart"});
                  })
            }
        }
    })
})

app.post('/order', (req,res)=>{
    var r= req.body;
    var c = `${r.credit_card}`;
    var credit = c.slice(c.length-4, c.length+1);
    pool.query('INSERT INTO `orders` (`order_id`, `customer_id`, `cart_id`, `total_price`, `city`, `street`, `shipping_date`, `order_date`, `credit_card`) VALUES (NULL, ?,?,?,?,?,?,?,?)',
    [r.customer_id, r.cart_id, r.total_price, r.city, r.street, r.shipping_date, r.order_date, credit], (err,rows)=>{
        if (err) { 
            console.log(err);
            res.send("Error in Server")
        }
        else{
            pool.query('UPDATE `carts` SET `active` = "0" WHERE `carts`.`cart_id` = ?', [r.cart_id], (err,rows)=>{
                if (err) { 
                    console.log(err);
                    res.send("Error in Server")
                }
                res.send({message: "Order success"});
            })
        }
    })
})

app.get('/lastPurchase', (req,res)=>{
    var id = req.session.user.customer_id;
    pool.query('SELECT * FROM orders WHERE customer_id= ? and order_id AND order_date = (SELECT MAX(order_date) FROM orders WHERE customer_id=?)',[id,id], (err,rows)=>{
        if (err) { 
            console.log(err);
            res.send("Error in Server")
        }
        console.log(rows)
        res.send(rows);
    })
})

app.get('/addCart', (req,res)=>{
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth()+1
    var year = d.getFullYear();
    var date = `${year}-${month}-${day}`;
    var customer_id = req.session.user.customer_id;
    pool.query('INSERT INTO `carts` (`customer_id`, `date`) VALUES (?, ?)', [customer_id, date], (err,rows)=>{
        if (err) { 
            console.log(err);
            res.send("Error in Server")
        }
        res.send({message: "Success on adding new cart"});
    }) 
})

app.delete('/deleteProduct/:id', (req,res)=>{
    var cp_id = req.params.id;
    pool.query('DELETE FROM `cart_products` WHERE `cart_products`.`cp_id` =?',[cp_id],
    (err,rows)=>{
        if(err){
            console.log(err);
            res.send("Error in Server")
        }
        res.send({message: "Success on delete product cart"})
    })
})

app.delete('/clearCart/:id', (req,res)=>{
    var cart_id = req.params.id;
    pool.query('DELETE FROM `cart_products` WHERE `cart_products`.`cart_id` =?',[cart_id],(err,rows)=>{
        if(err){
            console.log(err);
            res.send("Error in Server")
        }
        res.send({message: "Success on delete cart"})
    })
})

app.get("*", (req,res)=>{
    res.sendFile(path.resolve('dist/Online-superMarket/index.html'))
})



app.use((err,req,res,next) => {
    if (err) {
        console.log(err);
        res.status(400);
        res.send(err);
    }
    else
        next();
});


app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    open(`http://localhost:${PORT}`);
});