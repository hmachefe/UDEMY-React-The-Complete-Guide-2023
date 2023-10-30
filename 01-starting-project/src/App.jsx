import reactImg from "./assets/react-core-concepts.png";
import compomentsImg from "./assets/components.png";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

import {CORE_CONCEPTS} from "./data.js";

function CoreConcepts({image, title, description}) {
  return <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
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
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>            
            </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
