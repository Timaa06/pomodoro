import { useState, useEffect } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(1500) // 25 minutes = 1500 seconds
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning])

  const handleToggle = () => {
    setIsRunning(!isRunning)
  }

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  const isPaused = !isRunning && seconds < 1500

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="animate-pulse-soft">
        {isPaused ? (
          <div className="text-center">
            <div
              className="text-9xl font-mono font-bold tracking-wider drop-shadow-lg"
              style={{ color: '#1E3A8A' }}
            >
              {timeDisplay}
            </div>
            <div className="text-2xl font-semibold text-gray-600 mt-6">
              Vous êtes en pause
            </div>
            <div className="text-lg text-gray-500 mt-2">
              Appuyez pour reprendre
            </div>
          </div>
        ) : (
          <div
            className="text-9xl font-mono font-bold tracking-wider drop-shadow-lg"
            style={{ color: '#1E3A8A' }}
          >
            {timeDisplay}
          </div>
        )}
      </div>

      <button
        onClick={handleToggle}
        className="px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-200 ease-out shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
        style={{
          backgroundColor: '#FF6347',
        }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  )
}

export default Timer