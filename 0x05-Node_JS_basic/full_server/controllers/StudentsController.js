import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      let response = 'This is the list of our students\n';
      Object.keys(data).sort().forEach(field => {
        const list = data[field].sort().join(', ');
        response += `Number of students in ${field}: ${data[field].length}. List: ${list}\n`;
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('./database.csv');
      const students = data[major] ? data[major].sort().join(', ') : '';
      res.status(200).send(`List: ${students}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
