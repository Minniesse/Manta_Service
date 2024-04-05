import React, { useState, useEffect } from 'react';
import style from './datetimebar.module.css';

function Datetimebar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let animationFrameId;

    const update = () => {
      const now = new Date();
      const thailandTime = new Date(now.getTime() + (7 * 60 - now.getTimezoneOffset()) * 60000);
      setCurrentTime(thailandTime);
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = days[currentTime.getDay()];
  const date = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const hour = currentTime.getHours() % 12 || 12;
  const minute = currentTime.getMinutes().toString().padStart(2, '0');
  const ampm = currentTime.getHours() < 12 ? 'am' : 'pm';

  const formattedDate = `${day} ${date} ${month} ${hour}:${minute} ${ampm}`;

  return (
    <div className={style.timebox}>
      {formattedDate}
    </div>
  );
}

export default Datetimebar;
