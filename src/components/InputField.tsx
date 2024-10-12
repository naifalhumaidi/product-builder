import { Dispatch, FC, useState } from "react";
import { IFormInput, IProduct } from "../interfaces";
import Input from "./Input";
interface IProps {
  input:IFormInput, 
  product:IProduct, 
  setProduct:Dispatch<React.SetStateAction<IProduct>>
  errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
}
}

const InputField: FC<IProps> = ({input, product, setProduct, errors}) => {

  // const [isFirst, setIsFirst] = useState(true);
  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement> ) => {
    const {name,value} = event.target;
    setProduct({
      ...product,
      [name]:value
    })
  }
  // const onFocusHandler = (event:React.FocusEvent<HTMLInputElement>) => {
  //   if (isFirst){
  //     event.target.value = "";
  //     setIsFirst(false);
  //   } 
  // }
  return (
      <div className="flex gap-2 flex-col">
        <label className="text-sm font-bold text-gray-900" htmlFor={input.id}>{input.label}</label>
        <Input {...input} value={product[input.name]} onChange={onChangeHandler}/>
        <div className="text-red-600 ml-2">{errors[input.name]}</div>
      </div>
  )
}
export default InputField;