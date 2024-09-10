import { FC } from "react";
import Colors from "./Colors";
import Button from "./Button";
import { IProduct } from "../interfaces";
interface IProps extends IProduct {}

 const ProductCard: FC<IProps> = ({title, description, imageURL, price, colors, category }) => {
  return (
    <>
      <div className="p-3 border rounded-lg">
      <h2 className="font-bold">{title}</h2>
      <img className="rounded-lg my-3" src={imageURL} alt={`${title} Image`} />
      <p className="">{description}</p>
      <Colors colors={colors}/>
      <div className="flex justify-between mb-2">
        <span>{price}$</span>
        <span>{category.name}</span>
      </div>
      <div className="flex gap-3">
        <Button onClick={()=>{}} classes="bg-green-900 w-full">Edit</Button>
        <Button classes="bg-red-800 w-full">Delete</Button>
      </div>
    </div>
    </>
  )
}
export default ProductCard;