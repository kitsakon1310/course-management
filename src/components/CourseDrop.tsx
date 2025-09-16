import { useCourseStore } from "../store/courseStore";

const CourseDrop = () => {
  const droppedCourses = useCourseStore(state => state.droppedCourses);

  return (
    <div>
      <h2>รายวิชาที่ถอนแล้ว</h2>
      {droppedCourses.length === 0 && <p>ยังไม่มีรายวิชาที่ถอน</p>}
      <ul>
        {droppedCourses.map(course => (
          <li key={course.id}>
            {course.id} - {course.nameTH} ({course.credit} หน่วยกิต) | Grade: {course.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDrop;
