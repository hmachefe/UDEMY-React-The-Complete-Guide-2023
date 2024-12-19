import MeetupDetail from "../../components/meetups/MeetupDetail";

// No CSS here. To keep the pages leaner. Styling will be applied in low level (embedding) components directly

function MeetupDetails({}) {
    return <MeetupDetail 
        title="A First Meetup"
        image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg"
        address = "Some street 5, Some city"
        description="The meetup description"
    />
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetUpId = context.params.meetupId;

    console.log(meetUpId);

    return {
        props: {
            meetupData: {
                id: meetUpId,
                title:"A First Meetup",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
                address: "Some street 5, Some city",
                description: "The meetup description"
            }
        }
    }
}

export default MeetupDetails;