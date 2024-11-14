import { useState, FC } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Confetti from "./components/Confetti"
import Cake from "./components/Cake"
import Yassun from "./components/Yassun"

const maxAge = 17 //17
const maxCountDown = 21 //21

const App: FC = () => {
  const [count, setCount] = useState(0)
  const [countDown, setCountDown] = useState(0)
  const birthday = countDown === maxCountDown

  const handleClick = () => {
    if (count < maxAge) {
      setCount(count + 1)
    } else {
      if (countDown < maxCountDown) {
        setCountDown(countDown + 1)
      }
    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{birthday ? "Happy Birthday!" : "Vite + React"} 11.14</h1>
      <p>{countDown} 回目</p>
      <div className="card">
        {birthday && <Confetti />}
        <button onClick={handleClick}>Age is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HappyBirthday
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {birthday && <Cake />}
      {birthday && <Yassun />}
    </>
  )
}

export default App
