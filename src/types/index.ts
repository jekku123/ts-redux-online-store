export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: { count: number; rate: number };
}
