export interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  category: Category,
  image: string,
  rating: Rating
}

export interface Rating {
  rate:number,
  count:number
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}