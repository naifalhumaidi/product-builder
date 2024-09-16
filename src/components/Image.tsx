import { FC } from "react";
interface IProps {
  src:string,
  alt:string,
  classes:string
}
 const Image: FC<IProps> = ({src, alt, classes}) => {
  return (
    <>
      <img className={classes} src={src} alt={alt} />
    </>
  )
}
export default Image;