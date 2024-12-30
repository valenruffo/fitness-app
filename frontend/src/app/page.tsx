
import React from 'react'
import { buttonVariants } from '../components/ui/button'
import Link from 'next/link'
import { getExercises } from '../app/exercises/exercises.api'
import { ExerciseCard } from '../app/exercises/exercise-card'

//--> para que el componente se renderice dinámicamente, por ejemplo al crear un nuevo ejercicio
export const dynamic = "force-dynamic"

async function HomePage() {
  const exercises = await getExercises()
  console.log(exercises)

  return (
    <div>
      <nav className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>FitnessApp</h1>
        <Link href={'/exercises/new'} className={buttonVariants()}>Create new exercise</Link>
      </nav>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-5'>
        {exercises.map((e: any) => {
          return (
            <ExerciseCard className='w-full h-52' exercise={e} key={e.id} />
          )
        })}
      </div>

    </div>

  )
}

export default HomePage