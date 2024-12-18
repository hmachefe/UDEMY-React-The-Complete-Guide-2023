// our-domain/new-meetup
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";


function NewMeetupPage() {

    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetupPage;