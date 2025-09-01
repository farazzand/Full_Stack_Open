const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const CourseContent = ({courseName, parts}) => {
  return (
    <div>
      
      <h2>{courseName}</h2>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <p>
        <b>total of {parts.reduce((sum,part) => sum + part.exercises, 0)} exercises </b>
      </p>
    </div>
  )
}
const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map(course => (
        <CourseContent key={course.id} courseName={course.name} parts={course.parts} />
      ))}
      
    </div>
  )
}
export default Course
