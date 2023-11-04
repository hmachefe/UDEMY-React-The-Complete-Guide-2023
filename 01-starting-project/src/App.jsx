import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

let tabContent = 'Please click a button';

function onSelect(selectedButton) {
  // selectedButton may be 'Components' or 'JSX, or 'Props' or 'State'
  console.log('button has been clicked from component', selectedButton);
  tabContent = selectedButton;
  console.log('selectedButton == ', selectedButton)
}

function App() {
  console.log('App');
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>            
            </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => onSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => onSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => onSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
