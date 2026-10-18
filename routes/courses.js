const express = require('express');
const router = express.Router();


const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];


router.get('/', (req, res) => {
    res.json(courses.map((c) => {
        return c.name;
    }));
});


router.get('/:id', (req, res) => {
    const courseId = req.params.id;
    const course = courses.find(c => c.id == courseId);

    if (!course) {
        return res.status("Student not found");
    }

    res.json(`Course: ${course.name}`);
});

module.exports = router;
