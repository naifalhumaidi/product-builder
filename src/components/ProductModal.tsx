import Modal from "./Modal";
import ColorCircle from "./ColorCircle";
import Button from "./Button";
import InputField from "./InputField";
import { Colors, FormInputList, } from "../data";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { IProduct } from "../interfaces";
import { productValidation } from "../validation";
interface IProps {
  isOpen: boolean,
  setIsOpen: Dispatch<React.SetStateAction<boolean>>,
  setProducts: Dispatch<SetStateAction<IProduct[]>>
}

 const ProductModal: FC<IProps> = ({isOpen, setIsOpen, setProducts}) => {
  //== Methods ==//

  // Render The Input Fields
  const intialProduct = {
    id: "",
    title:"title",
    description:"description",
    imageURL:"imageURL",
    price:"price",
    colors:["",""],
    category:{
        name:"",
        imageURL:""
    }    
  }
  
  const [product, setProduct] = useState<IProduct>(intialProduct);
  const [errors, setErrors] = useState<{
    title:string,
    description:string,
    imageURL:string,
    price:string
    }>
    ({
      title:"",
      description:"",
      imageURL:"",
      price:""
    });


  // Renderers
  const Inputs = FormInputList.map(input => <InputField errors={errors} product={product} setProduct={setProduct} input={input} key={input.id}/>)
  const ColorsInput = <div className="flex gap-2">{Colors.map(color => <ColorCircle color={color}/>)}</div>
  
  // Handlers
  const cancelHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsOpen(false);
    setProduct(intialProduct);
  }

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Submit Handling
    event.preventDefault();
    setIsOpen(false);
    setProducts((prev) => [product, ...prev] )

    // Error Handling
    const {title, description, imageURL, price} = product;
    setErrors(productValidation({title, description, imageURL, price}));
    if(!Object.values(errors).every(value => value === ""))
        return;
      console.log("Send Data to the Server");
  }

  return (
      <>
        <Modal title="Add a new Product" isOpen={isOpen}>
          <form className="space-y-4">
            <Button onClick={cancelHandler} width={"w-fit"} className="md:mx-0 text-black font-bold absolute top-0 right-0 m-3">X</Button>
            {Inputs}
            <div className="space-y-2">
              <span>Colors</span>
              {ColorsInput}
            </div>
            <Button onClick={submitHandler} width={"w-full"} className="mx-auto md:mx-0 bg-blue-900">Save</Button>
          </form>
        </Modal>
    </>
  )
}
export default ProductModal;