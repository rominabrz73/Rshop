import Home from "../src/pages/home/Home";
import Store from "../src/pages/store/Store";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";

export const routes=[
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/Store",
        element:<Store />
    },
    {
        path:"/product/:id",
        element:<Product/>
    },
    {
        path:"/login",
        element:<Login />
    },
    
]