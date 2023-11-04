import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";


function App() {
  console.log('App');
  const [selectedTopic, setSelectedTopic] = useState('components');
  console.log('2.   selectedTopic == ', selectedTopic)
  
  function onSelect(selectedButton) {
    // selectedButton may be 'Components' or 'JSX, or 'Props' or 'State'
    console.log('button has been clicked from component', selectedButton);
    setSelectedTopic(selectedButton);
    console.log('1.   selectedTopic == ', selectedTopic)
  }

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
            <TabButton onSelect={() => onSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => onSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => onSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => onSelect('state')}>State</TabButton>
          </menu>
        <div id="tab-content">
          <h2>
            {EXAMPLES[selectedTopic].title}
          </h2>
          <p>
            {EXAMPLES[selectedTopic].description}
          </p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
        </section>
      </main>
    </div>
  );
}

export default App;
