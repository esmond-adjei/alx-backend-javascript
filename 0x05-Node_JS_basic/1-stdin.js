process.stdout.write("Welcome to Hoberton School, what is your name?\n");

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name.length > 0) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write("This important software is now closing");
});
