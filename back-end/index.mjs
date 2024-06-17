import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let estudiantes = [
    { id: 1, nombre: 'Juan', edad: 20 },
    { id: 2, nombre: 'María', edad: 22 },
    { id: 3, nombre: 'Pedro', edad: 21 },
];

app.get('/students', (req, res) => {
    res.json(estudiantes);
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    newStudent.id = estudiantes.length + 1;
    estudiantes.push(newStudent);
    res.status(201).json(newStudent);
});

app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    estudiantes = estudiantes.filter(student => student.id !== parseInt(id));
    res.status(204).end();
});

app.patch('/students/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const studentIndex = estudiantes.findIndex(student => student.id === parseInt(id));

    if (studentIndex !== -1) {
        estudiantes[studentIndex] = { ...estudiantes[studentIndex], ...updatedData };
        res.json(estudiantes[studentIndex]);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
