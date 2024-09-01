import { FC } from "react";
interface IProps {
  
}
 const ProductCard: FC<IProps> = ({}) => {
  return (
    <div className="p-3 border rounded-xl">
      <h2 className="font-bold">Modern Concrete Gloves</h2>
      <img className="rounded-xl my-3" src="" alt="Product Image" />
      <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolor iure, temporibus rerum corporis fugiat saepe voluptas provident culpa reiciendis praesentium aperiam!</p>
      {/* <Colors/> */}
      <span>300$</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}
export default ProductCard;