function App() {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    const data = { part1, part2, part3, exercises1, exercises2, exercises3 };

    return (
        <div>
            <Header name={course} />
            <Content parts={data} />
            <Total sum={exercises1 + exercises2 + exercises3} />
        </div>
    );
}

function Header({ name }) {
    return <h1>{name}</h1>;
}

function Content({ parts }) {
    return (
        <div>
            <Part part={parts.part1} exercises={parts.exercises1} />
            <Part part={parts.part2} exercises={parts.exercises2} />
            <Part part={parts.part3} exercises={parts.exercises3} />
        </div>
    );
}

function Part({ part, exercises }) {
    return (
        <p>
            {part} {exercises}
        </p>
    );
}

function Total({ sum }) {
    return <p>Number of exercises {sum}</p>;
}

export default App;
