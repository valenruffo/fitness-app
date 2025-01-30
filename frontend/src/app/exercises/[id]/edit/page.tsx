import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import NavigatorBar from '@/components/Navigator/NavigatorBar'
import { getExercise } from '../../services'
import { ExerciseForm } from '../../new/exercise-form'

interface Props {
    params: {
        id: any
    }
}

async function ExerciseNewPage({ params }: Props) {
    const exercise = await getExercise(params.id)
    return (
        <div>
            <NavigatorBar />
            <div className='flex justify-center items-center'>

                <Card className='w-full max-w-md'>
                    <CardHeader>
                        <CardTitle>Editar ejercicio</CardTitle>
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