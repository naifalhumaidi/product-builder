import { FC, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductList } from "../data";
import Button from "./Button";
import ProductModal from "./ProductModal";
import { IProduct } from "../interfaces";
interface IProps {
  className:string;
}
 const Wrapper: FC<IProps> = ({className}) => {
  // Renderers
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const renderProductss = products.map( product => <ProductCard key={product.id} {...product} />);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`${className}`}>
        <Button onClick={_=>setIsOpen(true)} width={"w-fit"} className="mx-auto md:mx-0 mt-9 bg-blue-900">Add Product</Button>
        <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} setProducts={setProducts}/>
        {renderProductss}
      </div>
    </>
  )
}
export default Wrapper;