import React from 'react'
import { 
    Index, 
    List,
    NotFound
} from '../view'

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