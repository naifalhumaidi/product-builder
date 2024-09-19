import { FC } from "react";
interface IProps {
  colors: string[],
}
 const Colors: FC<IProps> = ({colors}) => {
  return (
    <div className="flex gap-2">
      { colors.map(color => <div className={`w-5 h-5 ${color} rounded-full`}></div>) }
    </div>
  )
}
export default Colors;