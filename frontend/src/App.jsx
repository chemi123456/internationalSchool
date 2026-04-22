import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

export default function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API_URL}/students`);
      setStudents(data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingStudent) {
        await axios.put(`${API_URL}/students/${editingStudent._id}`, formData);
        setMessage("Student record updated successfully");
        setEditingStudent(null);
      } else {
        await axios.post(`${API_URL}/students`, formData);
        setMessage("Student enrolled successfully");
      }
      fetchStudents();
    } catch (error) {
      setMessage(error.response?.data?.message || "Operation failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/students/${id}`);
      setMessage("Student record removed");
      fetchStudents();
    } catch (error) {
      setMessage(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="container">
      <header className="school-header">
        <div className="logo-container">
          <div className="logo-circle">GS</div>
          <div>
            <h1>GrocerSmart International School</h1>
            <p className="subtitle">Excellence in Education & Innovation</p>
          </div>
        </div>
      </header>

      <div className="portal-grid">
        <aside className="notice-board">
          <h3>Notice Board</h3>
          <ul>
            <li>Final exams start next Monday.</li>
            <li>Annual sports day registrations open.</li>
            <li>New library books available now.</li>
          </ul>
        </aside>

        <main className="management-section">
          {message && (
            <div className="alert">
              <p>{message}</p>
              <button onClick={() => setMessage("")}>&times;</button>
            </div>
          )}

          <section className="form-card">
            <h2>{editingStudent ? "Update Student Details" : "Enroll New Student"}</h2>
            <StudentForm
              onSubmit={handleSubmit}
              editingStudent={editingStudent}
              onCancelEdit={() => setEditingStudent(null)}
            />
          </section>

          <section className="list-card">
            <div className="list-header">
              <h2>Student Directory</h2>
              <button className="btn-refresh" onClick={fetchStudents}>
                {loading ? "Refreshing..." : "Refresh List"}
              </button>
            </div>
            <StudentList
              students={students}
              onEdit={setEditingStudent}
              onDelete={handleDelete}
            />
          </section>
        </main>
      </div>
    </div>
  );
}
