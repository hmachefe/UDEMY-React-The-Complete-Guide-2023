import reactImg from "./assets/react-core-concepts.png";
import compomentsImg from "./assets/components.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function CoreConcepts(props) {
  return <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="Components are the building blocks of React apps"
              image={compomentsImg}
            />
            <CoreConcepts
              title="Props"
              description="Data passed to components"
            />
            <CoreConcepts
              title="State"
              description="Data managed by a component"
            />
            </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
