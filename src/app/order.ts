export class Order {
    constructor(
        public order_id: number,
        public customer_id: number,
        public cart_id: number,
        public total_price: number,
        public city: string,
        public street: string,
        public shipping_date: Date,
        public order_date: Date,
        public credit_card: string
        ) { }
}