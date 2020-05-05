import React from 'react'
import { 
    Index, 
    List,
    NotFound
} from '../view'

// index 修改后的代码
export const mainRoute = [
    {
        pathname:'/index',
        component: Index
    },
    {
        pathname:'/list',
        component: List
    },
    {
        pathname: '/404',
        component: NotFound
    }
]