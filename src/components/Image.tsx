import { FC } from "react";
interface IProps {
  src:string,
  alt:string,
  className:string
}
 const Image: FC<IProps> = ({src, alt, className}) => {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>
  )
}
export default Image;