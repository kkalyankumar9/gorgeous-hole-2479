import { createContext, useState } from "react";

export const AppContext=createContext()

export default function AppContextProvider({children}){
    const [isAuth,setisAuth]=useState(false)
    let LogIn=()=>{
        setisAuth(true)
    }
    let LogOut=()=>{
        setisAuth(false)
    }
    const [funds,setFunds]=useState(0)
    const [orderData,setOrderData]=useState([])
    const [orders,setOrders]=useState([])
    return <AppContext.Provider value={{LogIn,LogOut,isAuth,funds,setFunds,orderData,setOrderData,orders,setOrders}}>
        {children}
    </AppContext.Provider>
}
