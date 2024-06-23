import { configureStore } from '@reduxjs/toolkit'

import  { auth } from './Slices/authSlice'

import  { published } from './Slices/publishItems';
import { cartzz } from './Slices/cartz';



const Store = configureStore({
    reducer : {

        authSlice : auth,
        publishItems : published,
        cartzz : cartzz

    }
})

export default Store;