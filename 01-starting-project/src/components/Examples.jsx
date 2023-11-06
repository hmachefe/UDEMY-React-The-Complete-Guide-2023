import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton"
import Section from "./Section";


export function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();
  
    function onSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }
    
    let tabContent = <p> 'Please select topic' </p>;
    if (selectedTopic) {
      tabContent = <div id="tab-content">
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
    };

    return <Section id="examples" title="Examples">
        <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => onSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => onSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => onSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => onSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
    </Section>
}