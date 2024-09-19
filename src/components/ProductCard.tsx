import { FC } from "react";
import Colors from "./Colors";
import Button from "./Button";
import Image from "./Image";
import { IProduct } from "../interfaces";
import { sliceText } from "../utils/functions";
interface IProps extends IProduct {};

 const ProductCard: FC<IProps> = ({title, description, imageURL, price, colors, category }) => {
  const shortDescription = sliceText(description, 100);
  return (
    <>
      <div className="max-w-sm border rounded-lg p-3 mx-auto space-y-2">
        <Image className={"rounded-lg mb-3"} src={imageURL} alt={`${title} Image`} />
        <h2 className="font-bold">{title}</h2>
        <p className="">{shortDescription}</p>
        <Colors colors={colors}/>
        <div className="flex justify-between mb-2">
          <span>{price}$</span>
          <div className="flex gap-2 items-center">
            <span>{category.name}</span>
            <Image className="w-12 h-12 rounded-full" src={category.imageURL} alt="" />
          </div>
        </div>
        <div className="flex gap-3">
          <Button onClick={()=>{}} className="bg-green-900 w-full">Edit</Button>
          <Button className="bg-red-800 w-full">Delete</Button>
        </div>
      </div>
    </>
  )
}
export default ProductCard;