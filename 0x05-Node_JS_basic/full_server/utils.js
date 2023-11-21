import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const fields = {};
        lines.forEach(line => {
          const [firstName, field] = line.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });
        resolve(fields);
      }
    });
  });
};
