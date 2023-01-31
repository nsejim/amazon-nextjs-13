import {
    MenuIcon,
    SearchIcon
} from "@heroicons/react/outline";

import { getServerSession } from "next-auth/next"
import { authOptions } from '../../pages/api/auth/[...nextauth]';

import GuestUser from "./GuestUser";
import AuthUser from "./AuthUser";
import Logo from "./Logo";
import CartBasket from "./CartBasket";

async function Header() {
    const session = await getServerSession(authOptions)

    return (
        <header>
            {/*** Top Nav*/}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                {/** Logo */}
                <Logo />
                {/** Search */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/** Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
                    <div className="link">
                        <div>
                            {session?.user ? <AuthUser user={session?.user} /> : <GuestUser />}
                        </div>
                        <p className="font-extrabold md:text-sm">Account & List</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
            
                    <CartBasket />
 
                </div>

            </div>
            {/*** Bottom Nav*/}
            <div className="flex items-center bg-amazon_blue-light space-x-3 text-white text-sm whitespace-nowrap p-2 pl-6">
                <div className="flex link items-center">
                    <MenuIcon className="h-6 w-6 mr-1" />
                    All
                </div>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">{`Today's Deals`}</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Glocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    );
}

export default Header