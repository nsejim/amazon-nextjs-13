'use client'

import { Product } from '@/models/product'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import CurrencyFormat from 'react-currency-format';
import AddToBacket from './AddToBacket';

export const ProductItem = ({ id, title, price, description, category, image, rating, hasPrime }: Partial<Product> & {children: any}) => {


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image
                src={image || ''}
                width={200}
                height={200}
                alt={title || ''}
            />
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {Array(Math.floor(rating?.rate || 0)).fill(0).map((_, i) => (
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

           <AddToBacket
                key={id}
                id={id}
                title={title}
                category={category}
                description={description}
                image={image}
                price={price} 
          />

        </div>
    )
}
