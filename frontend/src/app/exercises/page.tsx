import { ExerciseCard } from './Card';
import { getExercises } from './services';
import NavigatorBar from '@/components/Navigator/NavigatorBar';


async function ExercisesPage() {
    const exercises = await getExercises();

    return (
        <div>
            <NavigatorBar />
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-3'>
                {exercises.map((e: any) => (
                    <ExerciseCard className='w-full h-52' exercise={e} />

                ))}
            </div>
        </div>
    );
}

export default ExercisesPage;