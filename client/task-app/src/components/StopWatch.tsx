import React, { useState, useEffect, useRef } from 'react'

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedtime] = useState(0);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedtime(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    }

  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  const handleStop = () => {
    setIsRunning(false);
  }

  const handleReset = () => {
    setElapsedtime(0);
    setIsRunning(false);
  }

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col items-center justify-center p-8 space-y-4 bg-gray-800 text-white rounded-xl w-1/2'>
      <p className="text-4xl font-semibold">{formatTime(elapsedTime)}</p>
      <div>
        <button className='bg-green-500 p-3 m-2 rounded-xl' onClick={handleStart}>
          Start
        </button>
        <button className='bg-red-500 p-3 m-2 rounded-xl' onClick={handleStop}>
          Stop
        </button>
        <button className='bg-blue-500 p-3 m-2 rounded-xl' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default StopWatch