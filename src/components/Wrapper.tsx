import { FC, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductList } from "../data";
import Button from "./Button";
import AddProductModal from "./AddProductModal";
interface IProps {
  className:string;
}
 const Wrapper: FC<IProps> = ({className}) => {
  const products = ProductList.map( product => <ProductCard key={product.id} {...product} />);

  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className={`${className}`}>
        <Button onClick={_=>{setIsOpen(true)}} width={"w-fit"} className="mx-auto md:mx-0 mt-9 bg-blue-900">Add Product</Button>
        <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        {products}
      </div>
    </>
  )
}
export default Wrapper;