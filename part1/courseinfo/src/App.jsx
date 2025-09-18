function App() {
    const course = "Half Stack application development";
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10,
    };

    const part2 = {
        name: "Using props to pass data",
        exercises: 7,
    };

    const part3 = {
        name: "State of a component",
        exercises: 14,
    };

    return (
        <div>
            <Header name={course} />
            <Content parts={{ part1, part2, part3 }} />
            <Total sum={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    );
}

function Header({ name }) {
    return <h1>{name}</h1>;
}

function Content({ parts }) {
    const { part1, part2, part3 } = parts;
    return (
        <div>
            <Part part={part1.name} exercises={part1.exercises} />
            <Part part={part2.name} exercises={part2.exercises} />
            <Part part={part3.name} exercises={part3.exercises} />
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
