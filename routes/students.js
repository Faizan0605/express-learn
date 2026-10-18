const express = require('express');
const router = express.Router();


const students = [

    { id: 1, name: "Alice" },

    { id: 2, name: "Bob" },

    { id: 3, name: "Charlie" }

];


router.get('/', (req, res) => {
    res.json(students.map(s => s.name));
});


router.get('/:id', (req, res) => {
    const studentId = req.params.id;
    const student = students.find(s => s.id == studentId);

    if (!student) {
        return res.status("Student not found");
    }

    res.json(`student: ${student.name}`);
});

module.exports = router;
