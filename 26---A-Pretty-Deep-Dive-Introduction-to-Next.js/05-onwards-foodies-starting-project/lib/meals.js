import sql from "better-sqlite3";

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
