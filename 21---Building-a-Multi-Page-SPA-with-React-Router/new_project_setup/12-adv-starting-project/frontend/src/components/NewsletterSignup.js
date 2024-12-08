import { useEffect } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from 'react-router-dom';

function NewsletterSignup() {

  // fetcher is provided by react router.
  // When executed this hook gives us an object which includes a bunch of properties and methods:
  // .Form:another form component, differing from the traditional submit function
  // .submit: atnoher function differing from the traditional submit function
  const fetcher = useFetcher();

  // using <fetcher.Form> rather than <Form> will still trigger an action 
  // but will not initalize a route transition. 
  // i.e. without navigating to the page the loader/action belongs

  const { data, state } = fetcher;

  useEffect(() => {    
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]); 

  return (
    <fetcher.Form 
        method="post" 
        action="/newsletter" 
        className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;