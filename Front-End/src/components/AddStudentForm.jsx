import { useState } from 'react';

function AddStudentForm ({ addStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, age: parseInt(age) });
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Agregar Estudiantes</h2>
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
        <button type="submit">Agregar Estudiante</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
