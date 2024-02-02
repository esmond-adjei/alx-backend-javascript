const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      let grpCount1 = 0;
      let grpCount2 = 0;
      let grpList1 = [];
      let grpList2 = [];

      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');

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

      resolve();
    });
  });
}

module.exports = countStudents;
