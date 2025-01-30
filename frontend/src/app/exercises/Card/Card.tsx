'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardTitle, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { deleteExercise } from '../services/exercises.service';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton'; // Importa el componente Skeleton

export function ExerciseCard({ exercise }: any) {
  const router = useRouter();
  const [isImageLoading, setIsImageLoading] = useState(true); // Estado para controlar la carga de la imagen

  const handleDeleteExercise = async (id: any) => {
    await deleteExercise(id);
    router.refresh();
  };

  return (
    <div>
      <Card className='flex flex-col justify-between h-full hover:shadow-sm hover:scale-105 transition-all duration-500 ease-in-out'>
        <div className='cursor-pointer'>
          <Link href={`/exercises/${exercise.id}`}>
            <CardHeader>
              <CardTitle className='flex justify-between'>
                {exercise.name}
                <span className='text-gray-500 text-xl font-bold'>
                  {exercise.weight}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='relative h-72 w-full'>
                {isImageLoading && (
                  <Skeleton className="w-full h-72 absolute rounded-md" /> // Muestra el skeleton mientras la imagen se carga
                )}
                <Image
                  className='object-cover rounded-md'
                  fill
                  src={exercise.imageUrl}
                  alt={exercise.name}
                  priority
                  onLoadingComplete={() => setIsImageLoading(false)} // Oculta el skeleton cuando la imagen se carga
                />
              </div>
              <p className='mt-4 text-sm'>{exercise.description}</p>
            </CardContent>
          </Link>
        </div>

        <CardFooter>
          <Button className='mt-5 mr-1' size="sm" onClick={() => router.push(`/exercises/${exercise.id}/edit`)}>Editar</Button>
          <Button className='mt-5' size="sm" variant='destructive' onClick={(e) => {
            e.stopPropagation();
            handleDeleteExercise(exercise.id);
          }}>Eliminar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ExerciseCard;