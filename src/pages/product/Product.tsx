import React from 'react'
import Container from '../../component/container/Container'
import { useParams } from 'react-router-dom'
import { useGetProductItem } from '../../services/hooks/queries';
import Button from '../../component/button/Button';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

function Product() {
     const{id}=useParams<{id:string}>();
     const{ data }=useGetProductItem({id:id as string});
     const {cartItems,handleIncreasePoductQty,handleDecreaseProductQty,getproductQTY ,handleRemoveProduct  } =useShoppingCartContext();
     console.log(cartItems)
  return (
    <div>
        <Container>
            <div className='grid grid-cols-12 shadow mt-8'>
                <div className=' col-span-10' >
                <p className='font-bold'>{data?.title}</p>
                <p>
                  {data?.description}
                </p>
                </div>
                
                <div className=' col-span-2'>
                  <img src={data?.image} alt="" />
                  <div className='grid grid-cols-3 mt-6'>
                    <Button onClick={()=>handleIncreasePoductQty(parseInt(id as string)) } className='rounded py-2'>+</Button>
                    <span className='flex justify-center items-center'>{ getproductQTY (parseInt(id as string))  }</span>
                    <Button onClick={()=>handleDecreaseProductQty(parseInt(id as string))}  className='rounded py-2'>-</Button>
                  </div>
                  <Button onClick={()=>handleRemoveProduct(parseInt(id as string)) }>Remove</Button>
                </div>
            </div>
        </Container>
    </div>
  );
}

export default Product