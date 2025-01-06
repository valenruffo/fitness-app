'use client'

import React from 'react'
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button";
import { deleteExercise } from './exercises.api'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function ExerciseCard({ exercise }: any) {

  const router = useRouter()
  const handleDeleteExercise = async (id: string) => {

    await deleteExercise(id)
    router.refresh() // para actualizar la lista de ejercicios en la página principal
  }

  return (
    <div>
      <Card>
        <div onClick={() => router.push(`/exercises/${exercise.id}`)}>
          <CardHeader>
            <CardTitle className='flex justify-between'>
              {exercise.name}
              <span className='text-gray-500 text-xl font-bold'>
                {exercise.weight}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{exercise.description}</p>
            <Image src={exercise.imageUrl} alt={exercise.name} width={400} height={200} />
          </CardContent>
        </div>

        <CardFooter>
          <Button className='mt-5 mr-1' onClick={() => router.push(`/exercises/${exercise.id}/edit`)}>Editar</Button>
          <Button className='mt-5' variant='destructive' onClick={(e) => {
            e.stopPropagation() // para evitar que se dispare el evento click del botón padre
            handleDeleteExercise(exercise.id)
          }}>Eliminar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ExerciseCard