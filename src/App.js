import React from "react";
import "./App.css";

function App() {
  // Student data with marks
  const studentList = [
    { id: 1, name: "Alice", m1: 85, m2: 90 },
    { id: 2, name: "Bob", m1: 70, m2: 65 },
    { id: 3, name: "Charlie", m1: 50, m2: 55 },
    { id: 4, name: "David", m1: 95, m2: 92 },
  ];

  // Grade calculation
  const calculateGrade = (marks) => {
    if (marks >= 180) return "A+";
    if (marks >= 150) return "A";
    if (marks >= 120) return "B";
    if (marks >= 80) return "C";
    return "D";
  };

  return (
    <div className="container">
      <h2>Student Performance Report</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => {
            const total = student.m1 + student.m2;
            const grade = calculateGrade(total);

            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.m1}</td>
                <td>{student.m2}</td>
                <td>{total}</td>
                <td className="grade">{grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
