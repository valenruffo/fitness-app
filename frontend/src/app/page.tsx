import React from 'react'
import NavigatorBar from '@/components/Navigator/NavigatorBar'

function App() {

  return (
    <div>
      <NavigatorBar />
      <div className='flex items-center justify-center gap-5'>
        <p>Pecho</p>
        <p>Espalda</p>
        <p>Hombros</p>
        <p>Piernas</p>
        <p>Biceps</p>
        <p>Triceps</p>
        <p>Abdomen</p>
      </div>

    </div>

  )
}

export default App