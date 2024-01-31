import fs from 'fs';


const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGrp = {};
        const fieldNames = fileLines[0].split(',');
        const propNames = fieldNames
          .slice(0, fieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const propValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGrp).includes(field)) {
            studentGrp[field] = [];
          }
          const studentEntries = propNames
            .map((propName, idx) => [propName, propValues[idx]]);
          studentGrp[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGrp);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;
