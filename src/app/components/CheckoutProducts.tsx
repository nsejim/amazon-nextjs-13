'use client'

import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CurrencyFormat from 'react-currency-format';
import { StarIcon } from '@heroicons/react/outline';
import AddToBacket from './AddToBacket';
import RemoveFromBasket from './RemoveFromBasket';

function CheckoutProducts() {

    const basketProducts = useSelector((state: RootState) => state.basket.map(product => product));

    return (
        <div className="mt-4 grid grid-flow-row grid-cols-1">
            {basketProducts.map(({ id, title, price, description, category, image, rating, hasPrime }) => {
                return (
                    <>
                        <div key={id} className="grid grid-cols-5 m-5 bg-white z-30 p-10 border border-gray-200 rounded-lg">

                            <Image
                                src={image || ''}
                                width={140}
                                height={140}
                                alt={title || ''}
                            />
                            <div className="col-span-3 relative">
                                <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
                                <h4 className='my-3'>{title}</h4>
                                <div className='flex'>
                                    {Array(Math.floor(rating?.rate || 0)).fill(0).map((_, i) => (
                                        <StarIcon key={i} className="h-5 text-yellow-500" />
                                    ))}
                                </div>
                                <p className='text-xs my-2 line-clamp-2'>{description}</p>

                                <div className='mb-5'>
                                    <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                </div>

                                {hasPrime && (
                                    <div className='flex items-center space-x-2 -mt-5'>
                                        <Image
                                            src="https://links.papareact.com/fdw"
                                            width={100}
                                            height={30}
                                            alt="prime"
                                        />
                                        <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                                    </div>
                                )}
                            </div>
                            <div className='grid grid-flow-row grid-cols-1 p-6'>
                                <AddToBacket
                                    id={id}
                                    title={title}
                                    category={category}
                                    description={description}
                                    image={image}
                                    price={price}
                                />
                                 <RemoveFromBasket
                                    id={id}
                                />
                            </div>

                        </div>
                    </>


                )
            })}
        </div>
    )
}

export default CheckoutProducts