const course = {
  name: 'Half Stack application development',
  parts: [
    { name: 'Fundamentals of React', tasks: 10 },
    { name: 'Using props to pass data', tasks: 7 },
    { name: 'State of a component', tasks: 14 },
  ],
};

const Header = ({ course }) => <h2>{course}</h2>;
const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part, i) => {
        return (
          <li key={i}>
            <b>{part.name}</b> - <i>{part.tasks}</i>
          </li>
        );
      })}
    </ul>
  );
};
const Total = ({ parts }) => {
  let totalNum = 0;
  parts.map((part) => (totalNum += part.tasks));
  return <h3>Total number of exercises: {totalNum}</h3>;
};

function App() {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
