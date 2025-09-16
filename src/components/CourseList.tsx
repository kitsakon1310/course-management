import { useCourseStore } from "../store/courseStore";

const CourseList = () => {
  const courses = useCourseStore(state => state.courses);
  const dropCourse = useCourseStore(state => state.dropCourse);

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      {courses.length === 0 && <p>ยังไม่มีรายวิชา</p>}
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.id} - {course.nameTH} ({course.credit} หน่วยกิต) | Grade: {course.grade} | Teacher: {course.teacher}
            <button onClick={() => dropCourse(course.id)}>ถอน</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
