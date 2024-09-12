import { FC } from "react";
import ProductCard from "./ProductCard";
import { ProductList } from "../data";
import EditDialog from "./EditDialog";
interface IProps {
  classes:string;
}
 const Wrapper: FC<IProps> = ({classes}) => {
  const products = ProductList.map( product => <ProductCard key={product.id} {...product} />);
  return (
    <>
      <div className={`${classes}`}>
        {/* {products} */}
      <EditDialog text={"Edit Dialog Component"}/>
      </div>
    </>
  )
}
export default Wrapper;