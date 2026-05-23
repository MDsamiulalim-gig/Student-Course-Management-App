import { useState } from "react";

import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";

function App() {

  const [courses, setCourses] = useState([

    {
      id: 1,
      title: "HTML",
      teacher: "Safayet",
      price: 500
    },

    {
      id: 2,
      title: "CSS",
      teacher: "Rahim",
      price: 700
    }

  ]);

  // ADD COURSE
  const addCourse = (course) => {

    setCourses([...courses, course]);
  };

  // DELETE COURSE
  const deleteCourse = (id) => {

    const updatedCourses =
      courses.filter(course => course.id !== id);

    setCourses(updatedCourses);
  };

  return (
    <div>

      <Navbar />

      <div className="container">

        <CourseForm onAddCourse={addCourse} />

        <h2>Total Courses: {courses.length}</h2>

        <div className="cardContainer">
          {
            courses.map(course => (

              <CourseCard
                key={course.id}
                course={course}
                onDelete={deleteCourse}
              />

            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;