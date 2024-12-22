// "use client" // would result in Error:   × It is not allowed to define inline "use server" annotated Server Actions in Client Components.

import fs from "node:fs";

export default async function ServerActionsDemo() {
    async function saveUserAction(formData) {
        "use server";
        console.log("saveUserAction excuted");
        const data = fs.readFileSync("dummy-db.json", "utf-8");
        const instructors = JSON.parse(data);
        const newInstructor = {
            id: new Date().getTime().toString(),
            name: formData.get("name"),
            title: formData.get("title")
        };
        instructors.push(newInstructor);
        fs.writeFileSync("dummy-db.json", JSON.stringify(instructors));
    }
    return (
        <div className="rsc">
            <h2>Server Actions</h2>
            <p>
                A "Form Action" converted to a "Server Action" via {' '}
                <strong>"use server"</strong>
            </p>
            <p> can be defined in a sever component or in a separate file </p>
            <p> Can be called from inside server component or client component </p>            
            <form action={saveUserAction}>
                <p>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="title"></label>
                    <input type="text" id="title" name="title" required />
                </p>         
                <p>
                    <button>
                        Save User
                    </button>
                </p>       
            </form>
        </div>
    );
}