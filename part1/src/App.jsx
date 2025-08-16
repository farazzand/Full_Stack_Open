const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>Course name: {props.course}</p>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>Part {props.part} has {props.exercises} excercises</p>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
      </div>
     )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total number of exercises are: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App