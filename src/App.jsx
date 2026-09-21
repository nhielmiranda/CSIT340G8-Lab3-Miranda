const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.course} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Application Development and Emerging Technologies'
  const part1 = { name: 'Application Development and Emerging Technologies', exercises: 3 }
  const part2 = { name: 'Information Management 2', exercises: 3 }
  const part3 = { name: 'Industry Elective 1', exercises: 3 }

  const fullName = 'Nhiel David D. Miranda'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={fullName} course={courseCode} section={section} />
    </div>
  )
}

export default App