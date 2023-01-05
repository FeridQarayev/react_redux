import React from 'react'
import Home from '../pages/Home'
import Favourites from '../pages/Favourites'
import Customers from '../pages/Customers'
import MainRoot from '../pages/MainRoot';
import Detail from '../pages/Detail';


export const ROUTES = [
    {
      path: "/",
      element: <MainRoot />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "favourites",
          element: <Favourites />,
        },
        {
          path: "detail/:Data",
          element: <Detail />,
        },
      ],
    },
  ];