export interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

export interface HomeProps {
  products: Product[]
}

export interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}
