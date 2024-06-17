import  { useState, useEffect } from 'react';
import axios from 'axios';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import EditStudentForm from './components/EditStudentForm';

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const addStudent = async (student) => {
    try {
      const response = await axios.post('http://localhost:4000/students', student);
      setStudents([...students, response.data]);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/students/${id}`);
      setStudents(students.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  const updateStudent = async (id, updatedStudent) => {
    try {
      const response = await axios.patch(`http://localhost:4000/students/${id}`, updatedStudent);
      setStudents(students.map(student => (student.id === id ? response.data : student)));
      setEditingStudent(null);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const cancelEdit = () => {
    setEditingStudent(null);
  };

  return (
    <div className="App">
      <h1>Student CRUD App</h1>
      <AddStudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} editStudent={editStudent} />
      {editingStudent && (
        <EditStudentForm
          student={editingStudent}
          updateStudent={updateStudent}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default App;
