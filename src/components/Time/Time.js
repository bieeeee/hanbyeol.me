import './Time.css';
import { useState } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState();
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(updateTime ,1000);

  return (
    <div className='time'>{currentTime}</div>
  )
}

export default Time;
