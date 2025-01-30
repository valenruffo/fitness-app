import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { ExerciseForm } from './exercise-form'
import { getExercise } from '../services/exercises.service'
import NavigatorBar from '@/components/Navigator/NavigatorBar'

interface Props {
    params: {
        id: any
    }
}

async function ExerciseNewPage({ params }: Props) {
    const exercise = await getExercise(params.id)
    console.log(params)
    return (
        <div>
            <NavigatorBar />
            <div className='flex justify-center items-center'>

                <Card className='w-full max-w-md'>
                    <CardHeader>
                        <CardTitle>{params.id ? 'Editar ejercicio' : 'Crear nuevo ejercicio'}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ExerciseForm exercise={exercise} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}


export default ExerciseNewPage