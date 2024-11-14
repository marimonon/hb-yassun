import { useState, useEffect, FC } from "react"
import { useReward } from "react-rewards"
// import { setInterval } from "timers"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Confetti from "./components/Confetti"

const App: FC = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti")
  const [count, setCount] = useState(0)
  const [countDown, setCountDown] = useState(0)
  const [birthday, setBirthday] = useState(false)

  useEffect(() => {
    if (isAnimating) {
      reward()
    }
  }, [isAnimating])

  const handleClick = () => {
    if (count < 17) {
      setCount(count + 1)
    } else {
      if (countDown < 21) {
        setCountDown(countDown + 1)
      } else {
        setBirthday(true)
        console.log(birthday)
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
      <h1>Vite + React 11.14</h1>
      <p>{countDown} 回目</p>
      <div className="card">
        <button disabled={isAnimating} onClick={handleClick}>
          <Confetti />
          Age is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
