import Modal from "./Modal";
import Colors from "./Colors";
import Button from "./Button";
import InputField from "./InputField";
import { FormInputList, ProductList } from "../data";

import { FC } from "react";
interface IProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

 const AddProductModal: FC<IProps> = ({isOpen, setIsOpen}) => {
  // const AddFunc = ()=>{
  //   ProductList.push({ id: "123",
  //     title: "Added Post",
  //     description: "Designed for performance, these running shoes provide excellent cushioning and support for your workouts.",
  //     imageURL: "https://picsum.photos/id/1031/400/300",
  //     price: "79.99",
  //     colors: ["bg-gray-800", "bg-red-600", "bg-red-600", "bg-red-600"],
  //     category: {
  //         name: "Footwear",
  //         imageURL: "https://picsum.photos/id/1032/400/300"
  //     }
  //   })
  // }  
  const Inputs = FormInputList.map(input => <InputField input={input}/> )
    const save = ()=>{
      setIsOpen(false);
    }
    
    return (
      <>
        <Modal  title="Add a new Product" isOpen={isOpen}>
          <form className="space-y-4">
            <Button onClick={_=>{setIsOpen(false)}} width={"w-fit"} className="md:mx-0 text-black font-bold absolute top-0 right-0 m-3">X</Button>
            {Inputs}
            <div className="space-y-2">
              <span>Colors</span>
              <Colors colors={["bg-green-800", "bg-blue-800", "bg-red-800", "bg-yellow-800", "bg-purple-800" ]}/>
            </div>
            <Button onClick={save} width={"w-full"} className="mx-auto md:mx-0 bg-blue-900">Save</Button>
          </form>
        </Modal>
    </>
  )
}
export default AddProductModal;