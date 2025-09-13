import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Couter from './component/counter/couter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Couter/>

    </>
  )
}

export default App
