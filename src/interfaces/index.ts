export interface IProduct {
    id?: string,
    // id?: string | undefined,
    title:string,
    description:string,
    imageURL:string,
    price:string,
    colors:string[],
    category:{
        name:string,
        imageURL:string
    }
}

export interface IFormInput {
    id: string,
    name:'title' | 'description' | 'imageURL' | 'price',
    label:string,
    type:string
}

export type IColors = "bg-green-800" | "bg-blue-800" | "bg-red-800" | "bg-yellow-800";