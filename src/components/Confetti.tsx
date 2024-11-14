import { useEffect, FC } from "react"
import { useReward } from "react-rewards"

const Confetti: FC = () => {
  const { reward, isAnimating } = useReward("rewardId", "confetti")

  useEffect(() => {
    if (!isAnimating) {
      reward()
    }
  }, [isAnimating])

  return <span id="rewardId" />
}

export default Confetti
