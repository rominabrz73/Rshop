import React from 'react'
import { lazy } from 'react';

const Home = lazy(() => import('../src/pages/home/Home'));
const Store = lazy(() => import('../src/pages/store/Store'));
const Login = lazy(() => import('./pages/login/Login'));
const Product = lazy(() => import('./pages/product/Product'));
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