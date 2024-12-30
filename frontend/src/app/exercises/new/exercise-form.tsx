"use client"

import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { createExercise, updateExercise } from '../exercises.api'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export function ExerciseForm({ exercise }: any) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: exercise?.name,
            description: exercise?.description,
            weight: exercise?.weight,
            imageUrl: exercise?.imageUrl,
        }
    })
    const router = useRouter()
    const params = useParams<{ id: any }>()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateExercise(params.id, {
                ...data,
                weight: parseInt(data.weight),
            })
        } else {
            await createExercise({
                ...data,
                weight: parseInt(data.weight),
            })
        }

        router.push('/')
        router.refresh()
    })
    return (
        <form onSubmit={onSubmit}>
            <Label>Nombre de ejercicio</Label>
            <Input type="text" placeholder="Ejercicio..." required {...register('name')} />

            <Label>Descripción</Label>
            <Textarea placeholder="Descripción del ejercicio..." {...register('description')} />

            <Label>Peso actual</Label>
            <Input type="number" placeholder="Kilogramos..." {...register('weight')} />

            <Label>Imagen</Label>
            <Input type="text" placeholder="Imagen del ejercicio(URL)" {...register('imageUrl')} />

            <Button className='mt-2 mr-1' type="submit">
                {params.id ? 'Editar ejercicio' : 'Crear ejercicio'}
            </Button>
            {params.id && <Link className={buttonVariants()} href='/'>Volver</Link>}

        </form>
    )
}
