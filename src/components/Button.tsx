import { ButtonHTMLAttributes, FC, ReactNode } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  classes: string,
  width?: "w-full" | "w-fit"
}
 const Button: FC<IProps> = ({children, classes,width, ...rest}) => {
  return (
    <>
      <button className={`text-white py-2 px-3 rounded-lg ${classes} ${width}`} {...rest}>{children}</button>
    </>
  )
}
export default Button;