import React, { useState } from 'react';

import ListRender from './ListRender';

const DailyTasks = () => {
  let midnight = new Date();

  midnight.setHours(24);
  midnight.setMinutes(0);
  midnight.setSeconds(0);
  midnight.setMilliseconds(0);

  const [timeLeft, calculateTimeLeft] = useState(
    Math.floor(midnight.getTime() - new Date().getTime()) / 1000
  );

  let timeDisplay = Math.floor(timeLeft / 3600)
    ? Math.floor(timeLeft / 3600) + ' hours left'
    : Math.floor((timeLeft % 3600) / 60)
    ? Math.floor((timeLeft % 3600) / 60) + ' minutes left!'
    : Math.floor((timeLeft % 3600) % 60)
    ? Math.floor((timeLeft % 3600) % 60) + ' seconds left!!'
    : "Time's up!";

  const data = ['Make Bed', 'Do Dishes'];
  return (
    <>
      <ListRender data={data} room="Daily" countdown={timeDisplay} />
    </>
  );
};
export default DailyTasks;
