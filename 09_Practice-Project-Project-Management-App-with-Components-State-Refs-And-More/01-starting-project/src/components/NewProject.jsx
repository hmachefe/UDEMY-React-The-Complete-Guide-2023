import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"

export default function NewProject({onAdd, onCancel}) {

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function onSave() {

        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle == "" 
            || enteredDescription == "" 
            || enteredDueDate == ""
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaptions="OKay">
                <h2 classNAme="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot toe enter a value</p>
                <p className="text-stone-600 mb-4">Please make sure your provided a valid value for every inputs</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex item-center justify-end gap-4 my-4">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={onSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                    </li>                
                </menu>
                <div>
                    <Input type="text"ref={title} label="Title"/>
                    <Input ref={description} label="Description" textarea/>                                    
                    <Input type="date" ref={dueDate} label="Due Date"/>                
                </div>
            </div>
        </>
    )
}