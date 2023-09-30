export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  const newTask = trueOrFalse ? true : task;
  const newTask2 = trueOrFalse ? false : task2;

  return [newTask, newTask2];
}
