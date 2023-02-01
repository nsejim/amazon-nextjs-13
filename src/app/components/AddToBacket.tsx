'use client';
import { Product } from "@/models/product";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/slices/basket";

function AddToBacket({ id, title, price, description, category, image, rating, hasPrime }: Partial<Product>) {

    const dispatch = useDispatch();

    return (
        <button className='mt-auto button' onClick={() => id ? dispatch(addToBasket({ 
            id,
            title,
            price, 
            description,
            category,
            image,
            rating,
            hasPrime 
        } as Product)) : ''}>Add to basket</button>
    )
}

export default AddToBacket