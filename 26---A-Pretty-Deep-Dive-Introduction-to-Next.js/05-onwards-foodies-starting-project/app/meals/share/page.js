"use client";

import { shareMeal } from '@/lib/actions';
import { useFormState } from 'react-dom';
import ImagePicker from '../image-picker';
import MealsFormSubmit from '../meals-form-submit';

import classes from './page.module.css';
import { useActionState } from 'react';

export default function ShareMealPage() {

  // useFormStatus returns { isPending } among others, about form submit's evolution 
  // whereas useFormState returns { formAction } among others, about form validation
  // useFormState() 1st argument is the actual server action
  // useFormState() 2nd argument is the initial state e.g. { message: null }
  // useFormState() returns the current state of the form (e.g. initial one) as 1st
  // useFormState() returns the formAction also as second returned value

  const [state, formAction] = useActionState(shareMeal, { message: null });
  // useForm was expected. But build failed. So I replaced it by useActionState

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="your image" name="image" />
          {state.message && <p>{state.message}</p> }
          <p className={classes.actions}>
           <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}