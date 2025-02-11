import { ComponentProps, Dispatch, FC, SetStateAction} from "react"
type TVariant ="primary" | "danger" | "warning";
type Tbutton = ComponentProps<"button"> & {
  variant ?:TVariant;
  user ?: string;
  setUser?:Dispatch<SetStateAction<string>>
}
const Button:FC<Tbutton>= ({children,style,variant,...rest}) =>{
  return <button style={{...style,...checkVariant(variant)}} {...rest}>{children}</button>;
  
}

export default Button

function checkVariant(variant ?:TVariant){
  if(variant=="primary"){
    return{backgroundColor:"blue" , color:"white"};
  }
  else if(variant=="danger"){
    return{backgroundColor:"red" , color:"white"};
  }
  else if(variant=="warning"){
    return{backgroundColor:"yellow" , color:"white"};
  }
  else{
    return{backgroundColor:"Blue" , color:"white"};
  }

}