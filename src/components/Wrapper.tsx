import { FC } from "react";
import ProductCard from "./ProductCard";
import { ProductList } from "../data";
interface IProps {
  classes:string;
}
 const Wrapper: FC<IProps> = ({classes}) => {
  return (
    <>
      <div className={`${classes}`}>
        {
          ProductList.map( product => <ProductCard key={product.id} {...product} />            
          )
        }
      </div>
    </>
  )
}
export default Wrapper;