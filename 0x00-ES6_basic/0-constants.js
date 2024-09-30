// Use const in taskFirst
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// No changes to getLast
export function getLast() {
  return ' is okay';
}

// Use let in taskNext
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
