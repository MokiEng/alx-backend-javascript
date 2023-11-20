const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(Boolean); // Remove empty lines

        if (lines.length <= 1) {
          reject(new Error('No data available'));
        }

        const students = lines.slice(1).map((line) => line.split(',')).filter((student) => student.length === 4);

        const fields = {
          CS: [],
          SWE: [],
        };

        students.forEach((student) => {
          if (student[3] === 'CS' || student[3] === 'SWE') {
            fields[student[3]].push(student[0]);
          }
        });

        console.log(`Number of students: ${students.length}`);

        Object.keys(fields).forEach((field) => {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
