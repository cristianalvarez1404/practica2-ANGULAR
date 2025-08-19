export const productsList:Product[] = [
  {
    id:1,
    name:"Lavandina",
    precio:10,
    description:"Botella de 1 litro"
  },
  {
    id:2,
    name:"Detergente",
    precio:5,
    description:"Dura 120 lavados"
  },
  {
    id:3,
    name:"Limpia Vidrios",
    precio:7,
    description:"Tus vidrios transparentes"
  },
  {
    id:4,
    name:"Quita Grasa",
    precio:8,
    // description:"Cocina tranquilo, nosotro limpiamos"
  },
  {
    id:5,
    name:"Perfumina",
    precio:2,
    description:"El olor a campo más realista"
  }
]

export interface Product {
  id:number | string,
  name:string,
  precio:number,
  description?:string
}