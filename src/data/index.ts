import { v4 as uuid } from "uuid";
import { IColors, IFormInput, IProduct } from "../interfaces/index";

export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: "Running Shoes",
        description: "Designed for performance, these running shoes provide excellent cushioning and support for your workouts.",
        imageURL: "https://picsum.photos/id/1031/400/300",
        price: "79.99",
        colors: ["bg-gray-800", "bg-red-600"],
        category: {
            name: "Footwear",
            imageURL: "https://picsum.photos/id/1032/400/300"
        }
    },
    {
        id: uuid(),
        title: "Elegant Handbag",
        description: "This chic handbag is crafted from high-quality leather, featuring a spacious interior for essentials, perfect for work or a night out on the town.",
        imageURL: "https://picsum.photos/id/1019/400/300",
        price: "129.99",
        colors: ["bg-green-800", "bg-blue-800", "bg-red-800", "bg-yellow-800"],
        category: {
            name: "Bags",
            imageURL: "https://picsum.photos/id/1020/400/300"
        }
    },
    // {
    //     id: uuid(),
    //     title: "Cozy Sweater",
    //     description: "Stay warm and stylish with this cozy sweater, perfect for chilly days and nights.",
    //     imageURL: "https://picsum.photos/id/1035/400/300",
    //     price: "49.99",
    //     colors: ["bg-gray-600", "bg-red-800"],
    //     category: {
    //         name: "Clothing",
    //         imageURL: "https://picsum.photos/id/1036/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Sporty Cap",
    //     description: "This sporty cap is perfect for outdoor activities, providing sun protection and a stylish look.",
    //     imageURL: "https://picsum.photos/id/1037/400/300",
    //     price: "24.99",
    //     colors: ["bg-black", "bg-white"],
    //     category: {
    //         name: "Accessories",
    //         imageURL: "https://picsum.photos/id/1038/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Stylish Sneakers",
    //     description: "These stylish sneakers are perfect for everyday wear, providing comfort and support while keeping you looking trendy and fashionable on all occasions.",
    //     imageURL: "https://picsum.photos/id/1015/400/300",
    //     price: "49.99",
    //     colors: ["bg-red-800", "bg-blue-800", "bg-green-800"],
    //     category: {
    //         name: "Footwear",
    //         imageURL: "https://picsum.photos/id/1016/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Elegant Dress",
    //     description: "This elegant dress is perfect for special occasions, featuring a flattering silhouette and beautiful fabric.",
    //     imageURL: "https://picsum.photos/id/1039/400/300",
    //     price: "89.99",
    //     colors: ["bg-red-600", "bg-black"],
    //     category: {
    //         name: "Clothing",
    //         imageURL: "https://picsum.photos/id/1040/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Comfortable Pajamas",
    //     description: "These comfortable pajamas are perfect for a good night's sleep, made from soft and breathable fabric.",
    //     imageURL: "https://picsum.photos/id/1043/400/300",
    //     price: "39.99",
    //     colors: ["bg-blue-600", "bg-gray-800"],
    //     category: {
    //         name: "Clothing",
    //         imageURL: "https://picsum.photos/id/1044/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Running Shoes",
    //     description: "Designed for performance, these running shoes provide excellent cushioning and support for your workouts.",
    //     imageURL: "https://picsum.photos/id/1031/400/300",
    //     price: "79.99",
    //     colors: ["bg-gray-800", "bg-red-600"],
    //     category: {
    //         name: "Footwear",
    //         imageURL: "https://picsum.photos/id/1032/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Elegant Handbag",
    //     description: "This chic handbag is crafted from high-quality leather, featuring a spacious interior for essentials, perfect for work or a night out on the town.",
    //     imageURL: "https://picsum.photos/id/1019/400/300",
    //     price: "129.99",
    //     colors: ["bg-green-800", "bg-blue-800", "bg-red-800", "bg-yellow-800"],
    //     category: {
    //         name: "Bags",
    //         imageURL: "https://picsum.photos/id/1020/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Cozy Sweater",
    //     description: "Stay warm and stylish with this cozy sweater, perfect for chilly days and nights.",
    //     imageURL: "https://picsum.photos/id/1035/400/300",
    //     price: "49.99",
    //     colors: ["bg-gray-600", "bg-red-800"],
    //     category: {
    //         name: "Clothing",
    //         imageURL: "https://picsum.photos/id/1036/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Sporty Cap",
    //     description: "This sporty cap is perfect for outdoor activities, providing sun protection and a stylish look.",
    //     imageURL: "https://picsum.photos/id/1037/400/300",
    //     price: "24.99",
    //     colors: ["bg-black", "bg-white"],
    //     category: {
    //         name: "Accessories",
    //         imageURL: "https://picsum.photos/id/1038/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Stylish Sneakers",
    //     description: "These stylish sneakers are perfect for everyday wear, providing comfort and support while keeping you looking trendy and fashionable on all occasions.",
    //     imageURL: "https://picsum.photos/id/1015/400/300",
    //     price: "49.99",
    //     colors: ["bg-red-800", "bg-blue-800", "bg-green-800"],
    //     category: {
    //         name: "Footwear",
    //         imageURL: "https://picsum.photos/id/1016/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Elegant Dress",
    //     description: "This elegant dress is perfect for special occasions, featuring a flattering silhouette and beautiful fabric.",
    //     imageURL: "https://picsum.photos/id/1039/400/300",
    //     price: "89.99",
    //     colors: ["bg-red-600", "bg-black"],
    //     category: {
    //         name: "Clothing",
    //         imageURL: "https://picsum.photos/id/1040/400/300"
    //     }
    // },
    // {
    //     id: uuid(),
    //     title: "Comfortable Pajamas",
    //     description: "These comfortable pajamas are perfect for a good night's sleep, made from soft and breathable fabric.",
    //     imageURL: "https://picsum.photos/id/1043/400/300",
    //     price: "39.99",
    //     colors: ["bg-blue-600", "bg-gray-800"],
    //     category: {
    //         name: "Clothing",
    //         imageURL: "https://picsum.photos/id/1044/400/300"
    //     }
    // },
];


const ids: IFormInput["name"][] = ["title","description","imageURL","price"]
export const FormInputList: IFormInput[] = ids.map(id =>(
    {
        id: `${id}`,
        name: `${id}`,
        label: `Product ${id.charAt(0).toUpperCase() + id.slice(1)}`,
        type: "text"
    }
))

export const Colors: IColors[] = [
    "bg-green-800", 
    "bg-blue-800", 
    "bg-red-800" ,
    "bg-yellow-800"
]