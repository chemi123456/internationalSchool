import React from "react";

export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="student-list">
      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students enrolled yet.</p>
        </div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <div className="student-card" key={student._id}>
              <div className="student-badge">{student.gender}</div>
              <h3>{student.name}</h3>
              <div className="student-details">
                <p><strong>ID:</strong> {student.studentID}</p>
                <p><strong>Grade:</strong> {student.grade}</p>
                <p><strong>Email:</strong> {student.email}</p>
              </div>
              <div className="student-actions">
                <button className="btn-edit" onClick={() => onEdit(student)}>Edit</button>
                <button className="btn-delete" onClick={() => onDelete(student._id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
