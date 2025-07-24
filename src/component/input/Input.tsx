import {  ComponentProps, FC } from "react";
import { SInputWrapper } from "./Input.styled";

  
/*type Tinput = ComponentProps<"input"> 

  const Input:FC<Tinput>= ({ style,...rest}) =>{
    return 
  
    <input   style={{...style}} {...rest}/>
   
    
  }

export default Input

*/
import React from 'react'

function Input() {
  return (
      <SInputWrapper>
<input type="text" />
  </SInputWrapper>
  )
}

export default Input


  