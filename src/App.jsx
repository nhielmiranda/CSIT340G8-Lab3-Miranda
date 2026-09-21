const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Total units {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
  const part1 = 'Application Development and Emerging Technologies'
  const exercises1 = 3
  const part2 = 'Information Management 2'
  const exercises2 = 3
  const part3 = 'Industry Elective 1'
  const exercises3 = 3

  const fullName = 'Nhiel David D. Miranda'
  const courseCode = 'CSIT340'
  const section = 'G8'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Footer name={fullName} course={courseCode} section={section} />
    </div>
  )
}

export default App