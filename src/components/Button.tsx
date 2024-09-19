import { ButtonHTMLAttributes, FC, ReactNode } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  className: string,
  width?: "w-full" | "w-fit"
}
 const Button: FC<IProps> = ({children, className,width, ...rest}) => {
  return (
    <>
      <button className={`text-white py-2 px-3 rounded-lg ${className} ${width}`} {...rest}>{children}</button>
    </>
  )
}
export default Button;