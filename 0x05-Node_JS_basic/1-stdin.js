process.stdin.setEncoding('utf8');

console.log("Welcome to Hoberton School, what is your name?");

process.stdin.on('data', (data) => {
  const name = data.trim();
  if (name.length > 0) {
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
