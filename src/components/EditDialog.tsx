import { FC } from "react";
import Colors from "./Colors";
interface IProps {
  text:string,

}
 const EditDialog: FC<IProps> = ({text}) => {
  return (
    <>
      {text}
      <form>
        {/* {/* <Input> */}
          <h3>Title</h3>
            {/* .. */}
        </Input>

        <h3>Description</h3>
        <h3>Standard Color</h3>

        <h3>Standard Color</h3>
        <div className="flex gap-2">
        {[1,2,3,4,5].map(color => (
          <Colors colors={["bg-red-900"]}/>
          
        ))}
        </div> */}

      </form>
    </>
  )
}
export default EditDialog;