export class Customer {
    constructor(
        public customer_id: number,
        public mail: string,
        public password: string,
        public repeat_password:string,
        public city: string,
        public street: string,
        public first_name: string,
        public last_name: string) { }
}