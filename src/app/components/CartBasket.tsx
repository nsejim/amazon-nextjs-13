import { ShoppingCartIcon } from "@heroicons/react/solid"
import Link from "next/link"

function CartBasket() {
    return (
        <Link href="/basket" className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">0</span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">Basket</p>
        </Link>
    )
}

export default CartBasket