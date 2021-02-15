import React from 'react';

import ListRender from './ListRender';

const WeeklyTasks = () => {
  let today = new Date().getDay();

  let daysLeft = 7 - today;

  return (
    <ListRender
      data={['Mop Floors', 'Brush Floors']}
      room="Weekly"
      countdown={daysLeft + ' days left'}
    />
  );
};

export default WeeklyTasks;
