import React from 'react'
import { getExercise } from '../exercises.api'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

interface Props {
    params: {
        id: any
    }
}

async function ExerciseDetailPage({ params }: Props) {
    const exercise = await getExercise(params.id)

    return (
        <div className='flex items-center justify-center h-screen'>
            <Card>
                <CardHeader>
                    <CardTitle className='flex justify-between'>
                        <h1>{exercise.name}</h1>
                        <span className='text-gray-500 text-xl font-bold'>{exercise.weight}kg</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{exercise.description}</p>
                    <p>Ejercicio creado el: {exercise.createdAt}</p>
                    <p>Ultima actualziacion: {exercise.updatedAt}</p>
                    <img src={exercise.imageUrl} alt={exercise.name} />
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