// No CSS in the (wrapping) pages to keem their code leaner. 
// Styling will be applied here, in low level components directly
// unlocking CSS module feature

// CSS module file will contain styling rules only scoped to the present (embedded) component  
// styles defined in this CSS module will not spill over othe components

import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return <section className={classes.detail}>
    <img 
        src={props.image} 
        alt="A first meetup" 
    />
    <h1>
        {props.title} 
    </h1>
    <address>
        {props.address} 
    </address>
    <p>
        {props.description}
    </p>
  </section>;
}

export default MeetupDetail;