import { FC } from "react";
import Button from "./Button";
import AddProductModal from "./AddProductModal";
interface IProps {
  
}
 const deleteDialog: FC<IProps> = ({}) => {
  return (
    <>
      {/* Temporary */}
      <AddProductModal/>
    </>
  )
}
export default deleteDialog;