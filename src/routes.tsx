import Home from "../src/pages/home/Home";
import Store from "../src/pages/store/Store";
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
]