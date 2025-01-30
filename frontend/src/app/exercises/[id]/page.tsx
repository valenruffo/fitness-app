'use client'
import React from 'react'
import { getExercise } from '../services/exercises.service'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'


interface Props {
    params: {
        id: any
    }
}

async function ExerciseDetailPage({ params }: Props) {
    console.log(params)
    const exercise = await getExercise(params.id)
    return (
        <div className='flex justify-center items-center'>
            <Card className='w-full max-w-md'>
                <CardHeader>
                    <CardTitle className='flex justify-between'>
                        <h1>{exercise.name}</h1>
                        <span className='text-gray-500 text-xl font-bold'>{exercise.weight}kg</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{exercise.description}</p>
                    <p className='font-semibold'>Ejercicio creado el: {exercise.createdAt}</p>
                    <p className='font-semibold'>Ultima actualziacion: {exercise.updatedAt}</p>
                    <Image className='rounded-md' src={exercise.imageUrl} alt={exercise.name} width={400} height={400} priority />
                </CardContent>
                <CardFooter>
                    <Link
                        className={buttonVariants()}
                        href='/'>
                        Volver</Link>
                </CardFooter>
            </Card>

        </div>
    )
}

export default ExerciseDetailPage