function CourseCard({ course, onDelete }) {

  return (
    <div className="card">

      <h2>{course.title}</h2>

      <p>Teacher: {course.teacher}</p>

      <h3>{course.price} Tk</h3>

      <button onClick={() => onDelete(course.id)}>
        Delete
      </button>

    </div>
  );
}

export default CourseCard;