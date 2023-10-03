export default function updateStudentGradeByCity(students: Array<Object>, city: string, newGrades: Array<Object>): Array<Object> {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeObj) {
        return {
          ...student,
          grade: gradeObj.grade,
        };
      } else {
        return {
          ...student,
          grade: 'N/A',
        };
      }
    });
}
