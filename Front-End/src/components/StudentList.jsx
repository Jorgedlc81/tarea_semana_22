

function StudentList ({ students, deleteStudent, editStudent }) {
  return (
    <div>
      <h2>Lista Estudiantes</h2>
      {students.map(student => (
        <div key={student.id}>
          <span>{student.name} ({student.age})</span>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          <button onClick={() => editStudent(student)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
