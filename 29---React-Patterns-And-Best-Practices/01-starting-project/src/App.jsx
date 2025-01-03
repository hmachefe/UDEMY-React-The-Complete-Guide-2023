import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <h2>why work with us ?</h2>
    {/* wrapper component */}
    <Accordion className="accordion">
      <Accordion.Item className="accordion-item" id="experience">
        <Accordion.Title className="accordion-item-title">
          We got 20 years of experience
        </Accordion.Title>
        <Accordion.Content 
          className="accordion-item-content" 
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
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item className="accordion-item" id="local-guides">
        <Accordion.Title className="accordion-item-title">
          we are working with local guides
        </Accordion.Title>
        <Accordion.Content className="accordion-item-content">
        <article>
          <p>
            we are not doing this along from our office
          </p>
          <p>
            Instead we are working with local guides to ensure a safe and pleasant vacation.
          </p>
        </article>
        </Accordion.Content>        
      </Accordion.Item>
    </Accordion>
  </main>;
}

export default App;
