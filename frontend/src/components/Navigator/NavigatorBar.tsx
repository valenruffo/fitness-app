import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'
import { Routes } from '../../../models';

function NavigatorBar() {

  return <div className='flex justify-between items-center mb-10'>
    <Link href={Routes.HOME}>
      <h1 className='text-4xl font-bold'>MY WEIGHTS</h1>
    </Link>
    <span className='flex gap-2'>
      <Link href={Routes.HOME} className={buttonVariants()}>
        Home
      </Link>
      <Link href={Routes.EXERCISES} className={buttonVariants()}>
        Exercises
      </Link>
      <Link href={Routes.CREATE_EXERCISE} className={buttonVariants()}>Create Exercise</Link>
    </span>
  </div>
}


export default NavigatorBar
