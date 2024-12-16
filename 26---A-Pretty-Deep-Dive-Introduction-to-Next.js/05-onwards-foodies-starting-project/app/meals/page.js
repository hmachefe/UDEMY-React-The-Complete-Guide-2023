import MealsGrid from "../components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
export default function MealsPage() {

    console.log("MealsPage executing...");

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun !
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    );
}