// Exporting the function as required
export default function taskBlock(trueOrFalse) {
  const task = false; // Using let instead of var
  const task2 = true; // Using let instead of var

  if (trueOrFalse) {
    const task = true; // Using let inside the block
    const task2 = false; // Using let inside the block
  }

  return [task, task2];
}
