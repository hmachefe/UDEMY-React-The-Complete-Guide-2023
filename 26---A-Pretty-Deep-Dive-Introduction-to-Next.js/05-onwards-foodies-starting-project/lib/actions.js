"use server"; // important: Directive not inside a function. Instead at the top of the file. 

export async function shareMeal(formData) {
    // this creates a so called action, guaranted to be executed on the server, and only there
    // "use server";
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