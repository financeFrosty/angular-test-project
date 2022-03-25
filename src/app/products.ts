export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Phone XL",
        price: 123,
        description: "Good cellphone"
    },
    {
        id: 2,
        name: "Phone XL 2",
        price: 234,
        description: "Very good phone"
    },
    {
        id: 3,
        name: "IPhone",
        price: 345,
        description: "Apple IPhone"
    },
    {
        id: 4,
        name: "Galaxy A10",
        price: 8000,
        description: "Samsung galaxy A10"
    },
]