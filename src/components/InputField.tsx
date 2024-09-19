import { FC, useState } from "react";
import { IFormInput, IProduct } from "../interfaces";
import Input from "./Input";
interface IProps { input:IFormInput }

const InputField: FC<IProps> = ({input}) => {
  const [product,setProduct] = useState<IProduct>({
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
  });

  const onChangeHandeler = (event:React.ChangeEvent<HTMLInputElement> ) => {
    const {name,value} = event.target;
    setProduct({
      ...product,
      [name]:value
    })
  }
  return (
      <div className="flex gap-2 flex-col">
        <label className="text-sm font-bold text-gray-900" htmlFor={input.id}>{input.label}</label>
        <Input {...input} value={product[input.name]} onChange={onChangeHandeler}/>
      </div>
  )
}
export default InputField;