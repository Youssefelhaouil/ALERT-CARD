import { ReactNode } from "react";
import "./Alert.scss";
import { IoClose } from "react-icons/io5";



export interface IProps {
  type:string
  icon:ReactNode
  title:string
  description:string

}

function Alert({type,icon,title,description}: IProps) {
  return (
    <>
      <div className={type}>
        <div className="AlertHeader pb-2">
          <h4>{icon} {title}</h4>
          <IoClose className="close " />
        </div>
        <p>
          {description}
        </p>
      </div>
    </>
  );
}

export default Alert;
