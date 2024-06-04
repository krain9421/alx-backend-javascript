export default function updateStudentGradeByCity(students, city, newGrades) {
  // students (getListStudents), city (String), grades (newGrades)

  function grader(student) {
    const stdnt = student;
    for (const grade of newGrades) {
      if (grade.studentId === student.id) {
        stdnt.grade = grade.grade;
        return stdnt;
      }
    }
    stdnt.grade = 'N/A';
    return stdnt;
  }

  return students.map(grader).filter((x) => x.location === city);
}
