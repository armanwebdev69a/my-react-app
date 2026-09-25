import { useState } from "react"

function App() {
  const [count,setCount] = useState<number>(0)
  const handleClick = () =>{
    setCount(count + 1)
  }
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default App