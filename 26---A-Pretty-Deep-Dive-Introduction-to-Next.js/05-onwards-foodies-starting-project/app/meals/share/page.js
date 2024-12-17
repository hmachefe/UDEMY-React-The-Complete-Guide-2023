import ImagePicker from '../image-picker';

import classes from './page.module.css';

export default function ShareMealPage() {

  async function shareMeal(formData) {
    // this creates a so called action, guaranted to be executed on the server, and only there
    "use server";
    const meal = { // to be stored in data base
      // properties reflect data model in DB, 
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      // the image will be stored on the FS, not in DB
      image: formData.get("image"), // only the image path will be stored in DB
      creator: formData.get("name"),
      creator_email: formData.get("email")
    };
    console.log(meal);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
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
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}