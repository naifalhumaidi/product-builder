import Modal from "./Modal";
import Colors from "./Colors";
import Button from "./Button";
import InputField from "./InputField";
import { FormInputList } from "../data";

import { Dispatch, FC, useState } from "react";
import { IProduct } from "../interfaces";
interface IProps {
  isOpen: boolean,
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

 const AddProductModal: FC<IProps> = ({isOpen, setIsOpen}) => {
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
  const Inputs = FormInputList.map(input => <InputField product={product} setProduct={setProduct} input={input} key={input.id}/>)

  // Handlers
   const submitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsOpen(false);
    console.log(event);
   }

  const closeHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setProduct(intialProduct);
    setIsOpen(false);
  }
    return (
      <>
        <Modal title="Add a new Product" isOpen={isOpen}>
          <form className="space-y-4">
            <Button onClick={closeHandler} width={"w-fit"} className="md:mx-0 text-black font-bold absolute top-0 right-0 m-3">X</Button>
            {Inputs}
            <div className="space-y-2">
              <span>Colors</span>
              <Colors colors={["bg-green-800", "bg-blue-800", "bg-red-800", "bg-yellow-800", "bg-purple-800" ]}/>
            </div>
            <Button onClick={submitHandler} width={"w-full"} className="mx-auto md:mx-0 bg-blue-900">Save</Button>
          </form>
        </Modal>
    </>
  )
}
export default AddProductModal;