import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/courses`);
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <h2>Courses</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h4>{course.courseName}</h4>
          <p>{course.instructor}</p>
        </div>
      ))}
    </>
  );
}

export default App;