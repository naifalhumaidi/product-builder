import { Dispatch, FC } from "react";
import { IFormInput, IProduct } from "../interfaces";
import Input from "./Input";
interface IProps {input:IFormInput, product:IProduct, setProduct:Dispatch<React.SetStateAction<IProduct>>}

const InputField: FC<IProps> = ({input, product, setProduct}) => {

  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement> ) => {
    const {name,value} = event.target;
    setProduct({
      ...product,
      [name]:value
    })
  }
  return (
      <div className="flex gap-2 flex-col">
        <label className="text-sm font-bold text-gray-900" htmlFor={input.id}>{input.label}</label>
        <Input {...input} value={product[input.name]} onChange={onChangeHandler}/>
      </div>
  )
}
export default InputField;