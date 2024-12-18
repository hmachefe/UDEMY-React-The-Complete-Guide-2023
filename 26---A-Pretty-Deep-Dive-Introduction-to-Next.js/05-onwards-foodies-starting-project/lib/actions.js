"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

 // important: Directive not inside a function. Instead at the top of the file. 

export async function shareMeal(formData) {

    function isInvalidText(text) {
      return !text || text.trim() === "";
    }

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

    if (
      isInvalidText(meal.title) 
      || 
      isInvalidText(meal.summary) 
      ||    
      isInvalidText(meal.instructions)            
      ||    
      isInvalidText(meal.creator)            
      ||    
      isInvalidText(meal.creator_email)
      || 
      !meal.creator_email.includes("@")               
      ||
      (!meal.image || meal.image.size == 0)
    ) {
      throw new Error("Invalid input");
    }

    await saveMeal(meal);
    redirect("/meals");
  }