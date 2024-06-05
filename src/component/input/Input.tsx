import {  ComponentProps, FC } from "react";

  
type Tinput = ComponentProps<"input"> 

  const Input:FC<Tinput>= ({ style,...rest}) =>{
    return <input   style={{...style}} {...rest}/>
  }

export default Input