import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";
import { useCourseStore } from "./store/courseStore";

function App() {
  const getGPA = useCourseStore(state => state.getGPA);

  return (
    <div style={{ padding: "20px" }}>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      <h2>GPA รวม: {getGPA().toFixed(2)}</h2>
    </div>
  );
}

export default App;
