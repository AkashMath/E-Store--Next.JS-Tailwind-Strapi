import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCart = ({data: {attributes: p, id}}) => {
  return (
    <Link href={`/products/${p.slug}`}>
        {/* <img className='w-full' src="/product-1.webp" alt="Product Image" /> */}

        <Image width={500} height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
        />
        <div className='p-4 text-black/[0.9]'>
        <h2 className='text-lg font-medium'>{p.name}</h2>
        <div className='flex items-center text-base/[0.5]'>
            <p className='mr-2 text-lg font-semibold'>&#8377;{p.price}</p>

              {p.original_price && (
                <>
                <p className='text-base font-medium line-through'>&#8377;{p.original_price}</p>
                <p className='ml-auto text-base font-medium text-green-500'>20% off</p>
                
                </>
              )}

        </div>
        </div>

    </Link>
  )
}

export default ProductCart