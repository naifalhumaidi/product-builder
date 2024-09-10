import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces/index";

export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: "Stylish Sneakers",
        description: "These stylish sneakers are perfect for everyday wear, providing comfort and support while keeping you looking trendy and fashionable on all occasions.",
        imageURL: "https://picsum.photos/id/1015/400/300",
        price: "49.99",
        colors: ["bg-red-800", "bg-blue-800", "bg-green-800"],
        category: {
            name: "Footwear",
            imageURL: "https://picsum.photos/id/1016/400/300"
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
    {
        id: uuid(),
        title: "Classic Watch",
        description: "A timeless classic, this watch features a sleek design and durable materials, making it the perfect accessory for any outfit.",
        imageURL: "https://picsum.photos/id/1021/400/300",
        price: "199.99",
        colors: ["bg-black", "bg-silver"],
        category: {
            name: "Accessories",
            imageURL: "https://picsum.photos/id/1022/400/300"
        }
    },
    {
        id: uuid(),
        title: "Trendy Sunglasses",
        description: "Protect your eyes in style with these trendy sunglasses, featuring UV protection and a modern design.",
        imageURL: "https://picsum.photos/id/1023/400/300",
        price: "29.99",
        colors: ["bg-black", "bg-brown"],
        category: {
            name: "Accessories",
            imageURL: "https://picsum.photos/id/1024/400/300"
        }
    },
    {
        id: uuid(),
        title: "Casual T-Shirt",
        description: "This comfortable t-shirt is made from soft cotton, perfect for casual outings or lounging at home.",
        imageURL: "https://picsum.photos/id/1025/400/300",
        price: "19.99",
        colors: ["bg-white", "bg-gray-800", "bg-blue-600"],
        category: {
            name: "Clothing",
            imageURL: "https://picsum.photos/id/1026/400/300"
        }
    },
    {
        id: uuid(),
        title: "Leather Wallet",
        description: "This sleek leather wallet features multiple card slots and a coin pocket, combining style and functionality.",
        imageURL: "https://picsum.photos/id/1029/400/300",
        price: "39.99",
        colors: ["bg-brown", "bg-black"],
        category: {
            name: "Accessories",
            imageURL: "https://picsum.photos/id/1030/400/300"
        }
    },
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
        title: "Stylish Backpack",
        description: "This stylish backpack is perfect for school or travel, featuring multiple compartments for organization.",
        imageURL: "https://picsum.photos/id/1033/400/300",
        price: "59.99",
        colors: ["bg-black", "bg-blue-600"],
        category: {
            name: "Bags",
            imageURL: "https://picsum.photos/id/1034/400/300"
        }
    },
    {
        id: uuid(),
        title: "Cozy Sweater",
        description: "Stay warm and stylish with this cozy sweater, perfect for chilly days and nights.",
        imageURL: "https://picsum.photos/id/1035/400/300",
        price: "49.99",
        colors: ["bg-gray-600", "bg-red-800"],
        category: {
            name: "Clothing",
            imageURL: "https://picsum.photos/id/1036/400/300"
        }
    },
    {
        id: uuid(),
        title: "Sporty Cap",
        description: "This sporty cap is perfect for outdoor activities, providing sun protection and a stylish look.",
        imageURL: "https://picsum.photos/id/1037/400/300",
        price: "24.99",
        colors: ["bg-black", "bg-white"],
        category: {
            name: "Accessories",
            imageURL: "https://picsum.photos/id/1038/400/300"
        }
    },
    {
        id: uuid(),
        title: "Elegant Dress",
        description: "This elegant dress is perfect for special occasions, featuring a flattering silhouette and beautiful fabric.",
        imageURL: "https://picsum.photos/id/1039/400/300",
        price: "89.99",
        colors: ["bg-red-600", "bg-black"],
        category: {
            name: "Clothing",
            imageURL: "https://picsum.photos/id/1040/400/300"
        }
    },
    {
        id: uuid(),
        title: "Stylish Belt",
        description: "This stylish belt is the perfect accessory to complete any outfit, made from high-quality materials.",
        imageURL: "https://picsum.photos/id/1041/400/300",
        price: "34.99",
        colors: ["bg-brown", "bg-black"],
        category: {
            name: "Accessories",
            imageURL: "https://picsum.photos/id/1042/400/300"
        }
    },
    {
        id: uuid(),
        title: "Comfortable Pajamas",
        description: "These comfortable pajamas are perfect for a good night's sleep, made from soft and breathable fabric.",
        imageURL: "https://picsum.photos/id/1043/400/300",
        price: "39.99",
        colors: ["bg-blue-600", "bg-gray-800"],
        category: {
            name: "Clothing",
            imageURL: "https://picsum.photos/id/1044/400/300"
        }
    },
    {
        id: uuid(),
        title: "Wireless Earbuds",
        description: "Enjoy your music on the go with these wireless earbuds, featuring excellent sound quality and a comfortable fit.",
        imageURL: "https://picsum.photos/id/1045/400/300",
        price: "79.99",
        colors: ["bg-black", "bg-white"],
        category: {
            name: "Electronics",
            imageURL: "https://picsum.photos/id/1046/400/300"
        }
    },
    {
        id: uuid(),
        title: "Portable Charger",
        description: "Keep your devices charged on the go with this portable charger, featuring a sleek design and high capacity.",
        imageURL: "https://picsum.photos/id/1047/400/300",
        price: "29.99",
        colors: ["bg-gray-800", "bg-black"],
        category: {
            name: "Electronics",
            imageURL: "https://picsum.photos/id/1048/400/300"
        }
    }
];
