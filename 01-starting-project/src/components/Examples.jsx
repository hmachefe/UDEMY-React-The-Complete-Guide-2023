import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton"
import Section from "./Section";
import Tabs from "./Tabs";


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
      <Tabs 
      buttons={
        <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => onSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => onSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => onSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => onSelect('state')}>State</TabButton>
        </>
      }>
            {tabContent}
      </Tabs>        
    </Section>
}