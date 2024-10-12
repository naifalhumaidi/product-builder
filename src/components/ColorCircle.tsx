import { IColors } from "../interfaces";
interface IProps { color: IColors }
 const ColorCircle = ({color}: IProps) => {
  return <div key={color} className={`w-5 h-5 ${color} rounded-full`}></div>

}
export default ColorCircle;