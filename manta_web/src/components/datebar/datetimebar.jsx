import React from 'react';
import style from './datetimebar.module.css';

function Datetimebar() {
  const now = new Date();

  const thailandTime = new Date(now.getTime() + (7 * 60 - now.getTimezoneOffset()) * 60000);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = days[thailandTime.getDay()];
  const date = thailandTime.getDate();
  const month = months[thailandTime.getMonth()];
  const hour = thailandTime.getHours() % 12 || 12;
  const minute = thailandTime.getMinutes().toString().padStart(2, '0');
  const ampm = thailandTime.getHours() < 12 ? 'am' : 'pm';

  const formattedDate = `${day} ${date} ${month} ${hour}:${minute} ${ampm}`;

  return (
    <div className={style.timebox}>
      {formattedDate}
    </div>
  );
}

export default Datetimebar;
