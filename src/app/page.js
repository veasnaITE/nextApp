import Card from '@/components/Card'
import Image from 'next/image'
import Product from './products/page'
import { Suspense } from 'react'
import Loading from './loading'
export const metadata={
  title:'ISTAD -Products',
  description:'List all products'
}
export default function Home() {
  return (
    <main >
      <Suspense fallback={<Loading />}>
      <Product />
      </Suspense>
    </main>
      
  )
}
