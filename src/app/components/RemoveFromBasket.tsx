'use client';
import { Product } from "@/models/product";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../store/slices/basket";

function RemoveFromBasket({ id }: Partial<Product>) {

    const dispatch = useDispatch();

    return (
        <button className='mt-auto button' onClick={() => id ? dispatch(removeFromBasket({ 
            id
        })) : ''}>Remove from basket</button>
    )
}

export default RemoveFromBasket