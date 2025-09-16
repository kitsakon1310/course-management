import { useState } from "react";
import { useCourseStore, Course } from "../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore(state => state.addCourse);

  const [id, setId] = useState("");
  const [nameTH, setNameTH] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [credit, setCredit] = useState(3);
  const [teacher, setTeacher] = useState("");
  const [grade, setGrade] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCourse: Course = { id, nameTH, nameEN, credit, teacher, grade };
    addCourse(newCourse);
    setId(""); setNameTH(""); setNameEN(""); setCredit(3); setTeacher(""); setGrade(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>เพิ่มรายวิชา</h2>
      <input placeholder="รหัสวิชา" value={id} onChange={e => setId(e.target.value)} required />
      <input placeholder="ชื่อวิชา (ไทย)" value={nameTH} onChange={e => setNameTH(e.target.value)} required />
      <input placeholder="ชื่อวิชา (อังกฤษ)" value={nameEN} onChange={e => setNameEN(e.target.value)} required />
      <input type="number" placeholder="หน่วยกิต" value={credit} onChange={e => setCredit(Number(e.target.value))} required />
      <input placeholder="อาจารย์ผู้สอน" value={teacher} onChange={e => setTeacher(e.target.value)} required />
      <input type="number" step="0.01" placeholder="เกรด" value={grade} onChange={e => setGrade(Number(e.target.value))} required />
      <button type="submit">เพิ่ม</button>
    </form>
  );
};

export default CourseForm;
