// http://localhost:3000/meals/something 
// will habve precedence over 
// http://localhost:3000/meals/share
import Image from "next/image";
import { getMeal } from "@/lib/meals";

import classes from "./page.module.css"

export default function MealDetailsPage({params}) { // special params prop passes by nextJS

    // getMeal() is executed server side, extracting a specific meal from the database
    const meal = getMeal(params.mealSlug); // params (object) contains key-value pairs (e.g: mealSlug)

    meal.instructions = meal.instructions.replace(/\n/g, "<BR />");

    return <>
        <header className={classes.header}>       
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={classes.headerText}>
                <h1>
                    {meal.title}
                </h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>NAME</a>
                </p>
                <p className={classes.summary}>
                    {meal.summary}
                </p>
            </div>
        </header>
        <main>
            <p 
                /* against cross-site scripting attacks */
                className={classes.instructions}
                dangerouslySetInnerHTML={{
                    __html: meal.instructions,
                }}
            >

            </p>
        </main>
    </>;
}