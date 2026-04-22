import React, { useEffect, useState } from "react";

const initialState = {
  name: "",
  studentID: "",
  grade: "",
  email: "",
  gender: "Male",
};

export default function StudentForm({ onSubmit, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name || "",
        studentID: editingStudent.studentID || "",
        grade: editingStudent.grade || "",
        email: editingStudent.email || "",
        gender: editingStudent.gender || "Male",
      });
    } else {
      setFormData(initialState);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editingStudent) setFormData(initialState);
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Full Name</label>
        <input
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label>Student ID</label>
        <input
          name="studentID"
          placeholder="e.g. STU-2024-001"
          value={formData.studentID}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-row">
        <div className="input-group">
          <label>Grade/Class</label>
          <input
            name="grade"
            placeholder="e.g. 10th Grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <label>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="student@school.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editingStudent ? "Save Changes" : "Register Student"}
        </button>
        {editingStudent && (
          <button type="button" className="btn-secondary" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
