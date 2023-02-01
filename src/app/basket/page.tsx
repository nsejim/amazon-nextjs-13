import Image from 'next/image'
import React from 'react'
import CheckoutProducts from '../components/CheckoutProducts'

function page() {
    return (
        <main className='max-w-screen-2xl mx-auto'>
            <Image
                className="md:col-span-full w-full"
                src="https://links.papareact.com/dyz"
                width={1000}
                height={200}
                alt=""
            />

            <CheckoutProducts/>            
        </main>
    )
}

export default page