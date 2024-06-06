import { useEffect, useState } from "react"
import { getProduct } from "../api/queries"
import { Iproduct } from "../../types/server"
import { useQuery } from "@tanstack/react-query"

export const useGetProduct =() =>{
return useQuery<Iproduct[]>({
    queryKey:["getProduct"],
    queryFn:getProduct
});

//     const [data,setData] = useState<Iproduct[]>([]);
// const [isLoading,setIsLoading]=useState(false)


//   useEffect(() => {
//         setIsLoading(true);
//         getProduct().then((res) =>{
//             setIsLoading(false);
//             setData(res);

//         });
// },[]);
// return {data,isLoading}
}