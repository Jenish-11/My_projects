import React from "react";
import { useContext } from "react";
import { States } from "../Route";
import Product_list from "./List_products";
import Menu from "./menus";
import Slide from "./slides";
import Suggested from "./suggested_items";


export default function Body(){
    var {products,setProducts} = React.useContext(States);
    return(
        <>
        <div className="">
            <Menu/>
            <Slide/>
            <Suggested/>
            <Product_list/>
        </div>
            
        </>
    )
}