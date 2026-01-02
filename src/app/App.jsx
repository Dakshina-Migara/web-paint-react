import { useState } from 'react'
import PaintApp from '../page/PaintApp/PaintApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaintApp />
    </>
  )
}

export default App
