
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}/api/employees`);
      if (!response.ok) throw new Error("Failed to fetch employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      ...form,
      salary: Number(form.salary),
    };

    try {
      const url = editingId
        ? `${API_URL}/api/employees/${editingId}`
        : `${API_URL}/api/employees`;

      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) throw new Error("Operation failed");

      setForm({ name: "", email: "", department: "", salary: "" });
      setEditingId(null);
      fetchEmployees();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleEdit = (employee) => {
    setEditingId(employee._id);
    setForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      salary: employee.salary,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/employees/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Delete failed");

      fetchEmployees();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>Employee Management System</h1>
      <p>Three-Tier DevOps Project</p>

      <h2>{editingId ? "Edit Employee" : "Add Employee"}</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
        <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} required />

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>

        {editingId && (
          <button type="button" onClick={() => {
            setEditingId(null);
            setForm({ name: "", email: "", department: "", salary: "" });
          }}>
            Cancel
          </button>
        )}
      </form>

      <h2>Employee Dashboard</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => (
          <div key={employee._id}>
            <h3>{employee.name}</h3>
            <p>{employee.email}</p>
            <p>{employee.department}</p>
            <p>Salary: {employee.salary}</p>

            <button onClick={() => handleEdit(employee)}>Edit</button>
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
