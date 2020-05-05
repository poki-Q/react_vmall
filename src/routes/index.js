import React from 'react'
import { 
    Index, 
    List,
    NotFound
} from '../view'

// list 修改后的代码
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