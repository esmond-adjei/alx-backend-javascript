const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n').filter(line => line.trim() !== '');

    let grpCount1 = 0;
    let grpCount2 = 0;
    let grpList1 = [];
    let grpList2 = [];

    lines.forEach(line => {
      const [firstname, lastname, age, field] = line.toString().split(',');

      if (firstname && lastname && age && field) {
        if (field === 'CS') {
          grpCount1++;
          grpList1.push(firstname);
        } else if (field === 'SWE') {
          grpCount2++;
          grpList2.push(firstname);
        }
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);
    console.log(`Number of students in CS: ${grpCount1}. List: ${grpList1.join(', ')}`);
    console.log(`Number of students in SWE: ${grpCount2}. List: ${grpList2.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;