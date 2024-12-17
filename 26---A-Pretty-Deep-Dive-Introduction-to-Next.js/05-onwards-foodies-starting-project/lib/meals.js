import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sql("meals.db");

export async function getMeals() {
    // new SQL statement that should be executed
    // db.prepare("SELECT * FROM meals").run(); // run is used for inserting data, or changing them
    // db.prepare("SELECT * FROM meals").get(); // would be used for one single data

    await new Promise((resolve) => setTimeout(resolve, 2000)); // artificial, demo purpose
    // throw new Error("Loading Meals failed.");
    return db.prepare("SELECT * FROM meals").all(); // all is used for fetching data
}

export function getMeal(slug) {
//    return db.prepare("SELECT * FROM meals WHERE slug= " + slug); // WOULD BE INSECURED 
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // PROTECT AGAINST SQL INJECTION
}


export async function saveMeal(meal) {
    // we want to create a slug like 
    //  id INTEGER PRIMARY KEY AUTOINCREMENT,
    //  slug TEXT NOT NULL UNIQUE,
    //  title TEXT NOT NULL,
    //  image TEXT NOT NULL,
    //  summary TEXT NOT NULL,
    //  instructions TEXT NOT NULL,
    //  creator TEXT NOT NULL,
    //  creator_email TEXT NOT NULL
    meal.slug = slugify(meal.title, {lower: true});
    meal.intructions = xss(meal.intructions);

    const extension = meal.image.name.split(".").pop();
    const filename = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed !")
        }
    });
    meal.image = `/images/${filename}`;

    db.prepare(
        `INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES(
            @title, 
            @summary, 
            @instructions, 
            @creator, 
            @creator_email, 
            @image, 
            @slug
        )
        `
    ).run(meal)

}