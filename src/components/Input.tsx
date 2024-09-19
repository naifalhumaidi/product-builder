import { FC, InputHTMLAttributes } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  
}
 const Input: FC<IProps> = ({...rest}) => {
  return (
    <>
      <input {...rest} className="outline-blue-600  border-2 border-gray-300 rounded-[7px] p-2"/>
    </>
  )
}
export default Input;