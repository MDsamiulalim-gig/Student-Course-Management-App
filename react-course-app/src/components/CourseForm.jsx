import { useState } from "react";

function CourseForm({ onAddCourse }) {

  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title || !teacher || !price) {
      alert("Please fill all fields");
      return;
    }

    const newCourse = {
      id: Date.now(),
      title,
      teacher,
      price
    };

    onAddCourse(newCourse);

    setTitle("");
    setTeacher("");
    setPrice("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Teacher Name"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button type="submit">
        Add Course
      </button>

    </form>
  );
}

export default CourseForm;