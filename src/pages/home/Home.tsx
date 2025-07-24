import React from 'react'
import { SInputWrapper } from '../../component/input/Input.styled'
import Input from '../../component/input/Input'
import { dayofWeek } from '../../utils/date'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../component/container/container'
import { handleDecrease, handleIncrease } from '../../redux/counterSlice/counterSlice'
import Button from '../../component/button/Button'
import { RootState } from '../../redux/store'


function Home() {
  const counterValue = useSelector((state:RootState)=>state.counter.value )
const dispach = useDispatch()

  console.log(counterValue)
  return (
 
    <div> 
      <Container>
      <div className='bg-contentWrapper'>
<Button onClick={()=>dispach(handleIncrease({num:2}))}>Increase
        </Button>
          {counterValue}
          <Button onClick={()=>dispach(handleDecrease({num:1}))}>Decrease
        </Button>
        <h1>{dayofWeek(new Date)}</h1>
         <Input/>
      </div>
        
      </Container>
         
    </div>
   
  )
}

export default Home