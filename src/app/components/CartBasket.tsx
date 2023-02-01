'use client';
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { RootState } from "../store/store";

function CartBasket() {
    const total = useSelector((state: RootState) => state.basket.length);

    return (
        <Link href="/basket" className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">
                {total}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
        </Link>
    )
}

export default CartBasket