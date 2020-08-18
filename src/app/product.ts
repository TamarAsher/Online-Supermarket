export class Product {
    constructor(
        public product_id: number,
        public product_name: string,
        public category_id: number,
        public price: number,
        public img: string,
        public quantity?: number,
        ) { }
}