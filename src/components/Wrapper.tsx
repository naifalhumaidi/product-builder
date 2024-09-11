import { FC } from "react";
import ProductCard from "./ProductCard";
import { ProductList } from "../data";
interface IProps {
  classes:string;
}
 const Wrapper: FC<IProps> = ({classes}) => {
  const products = ProductList.map( product => <ProductCard key={product.id} {...product} />);
  return (
    <>
      <div className={`${classes}`}>
        {products}
      </div>
    </>
  )
}
export default Wrapper;