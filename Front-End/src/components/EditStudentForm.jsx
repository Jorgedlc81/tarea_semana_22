import  { useState, useEffect } from 'react';

function EditStudentForm ({ student, updateStudent, cancelEdit }) {
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);

  useEffect(() => {
    setName(student.name);
    setAge(student.age);
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(student.id, { name, age: parseInt(age) });
  };

  return (
    <div>
      <h2>Actualizar Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Actualizar Estudiante</button>
        <button type="button" onClick={cancelEdit}>Cancel</button>
      </form>
    </div>
  );
}

export default EditStudentForm;
