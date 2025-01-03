import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <h2>why work with us ?</h2>
    {/* wrapper component */}
    <Accordion className="accordion">
      <Accordion.Item 
        id="experience"
        className="accordion-item"
        title="We got 20 years of experience"
      >
        <article>
          <p>
            You can&apost;t go wrong with us
          </p>
          <p>
            We are in the business of planning highly individualized 
            vacation trips for more than 20 years
          </p>
        </article>
      </Accordion.Item>
      <Accordion.Item
        id="local-guides"
        className="accordion-item"
        title="we are working with local guides"
      >
        <article>
          <p>
            we are not doing this along from our office
          </p>
          <p>
            Instead we are working with local guides to ensure a safe and pleasant vacation.
          </p>
        </article>
        
      </Accordion.Item>
    </Accordion>
  </main>;
}

export default App;
