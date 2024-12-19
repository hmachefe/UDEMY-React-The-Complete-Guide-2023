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

export async function getStaticPaths() {
    return {
        fallback: false, // means all paths have been covered, m1 and m2, and there no nore paths
        // with fallback we can simply define some paths insteaf of all paths
        // for instance, in case we have 100 of pages and we don't want to pregenerate all of them...
        // but maybe the most popular pages
        paths: [
        {
            params:             {
                meetupId: "m1" // temporarily hard-coded
            },
        },
        {
            params:             {
                meetupId: "m2" // temporarily hard-coded
            }
        }
        ]
    };
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