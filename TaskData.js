import React, { useState } from 'react';
import ListRender from './ListRender';

let bedroom = [
  'Brush Floor',
  'Make Bed',
  'Dust Surfaces',
  'Tidy Clothes',
  'Hoover Rug',
];
let bathroom = [
  'Brush Floor',
  'Mop Floor',
  'Clean Surfaces',
  'Clean Bath',
  'Clean Toilet',
];

let kitchen = [
  'Do Dishes',
  'Clean Cooker',
  'Clean Surfaces',
  'Empty Bin',
  'Empty Recycling',
  'Clean Fridge',
  'Clean Oven',
];
let livingRoom = [
  'Hoover Rug',
  'Brush Floor',
  'Dust Surfaces',
  'Tidy Clutter',
  'Clean Fireplace',
];

const TaskData = (props) => {
  const [taskList] = useState(eval(props.route.params.room));

  return (
    <>
      <ListRender data={taskList} room={props.route.params.room} />
    </>
  );
};

export default TaskData;
