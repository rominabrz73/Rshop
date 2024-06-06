
import { Link } from "react-router-dom";
import Container from "../../component/container/Container"
import Loading from "../../component/loading/Loading";
import Productitem from "../../component/productitem/Productitem"

import { useGetProduct } from "../../services/hooks/queries";

function Store() {
  const {data,isLoading} =useGetProduct();
  return (
    <Container>
      {isLoading ?
      (
      <div className="fixed w-full h-full left-0 top-0 bg-white flex justify-center items-center opacity-50 ">
        <Loading/>
        </div>
        ):(
      <div className="grid grid-cols-4 gap-4 mt-4"> 
    {data?.map((item)=>(
      <Link to={`/product/${item.id}`} key={item.id}>
       < Productitem key={item.id} {...item} /> 
      </Link>
    
    ))}
       
      
      </div>
)}
    </Container>
  );
}

export default Store;