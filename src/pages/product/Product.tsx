import React from 'react'
import Container from '../../component/container/Container'
import { useParams } from 'react-router-dom'
import { useGetProductItem } from '../../services/hooks/queries';

function Product() {
     const{id}=useParams<{id:string}>();
     const{}=useGetProductItem({id:id as string});
  return (
    <div>
        <Container>
            <div className='grid grid-cols-12'>
                <div className='bg-slate-600 col-span-10 h-90' ></div>
                <div className='bg-orange-600 col-span-2 h-90'></div>
            </div>
        </Container>
    </div>
  )
}

export default Product