const Student = require("../models/Student");

// @desc    Get all students
// @route   GET /api/students
// @access  Public
const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Public
const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      res.status(404);
      throw new Error("Student not found");
    }

    res.status(200).json(student);
  } catch (error) {
    next(error);
  }
};

// @desc    Create student
// @route   POST /api/students
// @access  Public
const createStudent = async (req, res, next) => {
  try {
    const { name, studentID, grade, email, gender } = req.body;

    if (!name || !studentID || !grade || !email) {
      res.status(400);
      throw new Error("name, studentID, grade and email are required");
    }

    const student = await Student.create({
      name,
      studentID,
      grade,
      email,
      gender,
    });

    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Public
const updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      res.status(404);
      throw new Error("Student not found");
    }

    student.name = req.body.name ?? student.name;
    student.studentID = req.body.studentID ?? student.studentID;
    student.grade = req.body.grade ?? student.grade;
    student.email = req.body.email ?? student.email;
    student.gender = req.body.gender ?? student.gender;

    const updatedStudent = await student.save();
    res.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Public
const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      res.status(404);
      throw new Error("Student not found");
    }

    await student.deleteOne();
    res.status(200).json({ message: "Student removed" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
