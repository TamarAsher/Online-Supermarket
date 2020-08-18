export class CartProduct {
    constructor(
        public cp_id: number,
        public product_id: number,
        public amount: number,
        public total_price: number,
        public cart_id: number,
        public product_name: string,
        public img: string) { }
}