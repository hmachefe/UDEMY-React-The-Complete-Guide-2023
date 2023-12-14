import { calculateInvestmentResults } from "../util/investment";

export default function Results({input}) {
    console.log('Results        input', calculateInvestmentResults(input));
    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}