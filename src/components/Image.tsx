import { FC } from "react";
interface IProps {
  src:string,
  alt:string
}
 const Image: FC<IProps> = ({src, alt}) => {
  return (
    <>
      <img src={src} alt={alt} />
    </>
  )
}
export default Image;