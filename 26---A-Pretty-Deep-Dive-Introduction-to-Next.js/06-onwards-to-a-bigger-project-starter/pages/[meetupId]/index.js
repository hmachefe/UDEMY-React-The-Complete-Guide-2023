import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
// No CSS here. To keep the pages leaner. Styling will be applied in low level (embedding) components directly

function MeetupDetails(props) {
    return <Fragment>
        <Head>
            <title>{props.meetupData.title}</title>
            <meta 
                name="description"
                content={props.meetupData.description}
            ></meta>
        </Head>
        <MeetupDetail 
            title = {props.meetupData.title}
            image = {props.meetupData.image}
            address = {props.meetupData.address}
            description = {props.meetupData.description}
        />
    </Fragment>
}

// function MeetupDetails({}) {
//     return <MeetupDetail 
//         title="A First Meetup"
//         image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg"
//         address = "Some street 5, Some city"
//         description="The meetup description"
//     />
// }

export async function getStaticPaths() {

    const client = await MongoClient.connect(
        "mongodb://hugomachefer:vzY78MBcRdw4lFhj@cluster0-shard-00-00.2jphb.mongodb.net:27017,cluster0-shard-00-01.2jphb.mongodb.net:27017,cluster0-shard-00-02.2jphb.mongodb.net:27017/?ssl=true&replicaSet=atlas-5092v5-shard-0&authSource=admin&retryWrites=true&w=majority"
     );
  
     const db = client.db("meetups"); // Replace with your database name
     const meetupsCollection = db.collection("meetups"); // Replace with your collection name
  
     const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
  
     client.close();

     return {
        fallback: false, // means all paths have been covered, m1 and m2, and there no nore paths
        // with fallback we can simply define some paths insteaf of all paths
        // for instance, in case we have 100 of pages and we don't want to pregenerate all of them...
        // but maybe the most popular pages
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
    };

    // return {
    //     fallback: false, // means all paths have been covered, m1 and m2, and there no nore paths
    //     // with fallback we can simply define some paths insteaf of all paths
    //     // for instance, in case we have 100 of pages and we don't want to pregenerate all of them...
    //     // but maybe the most popular pages
    //     paths: [
    //     {
    //         params:             {
    //             meetupId: "m1" // temporarily hard-coded
    //         },
    //     },
    //     {
    //         params:             {
    //             meetupId: "m2" // temporarily hard-coded
    //         }
    //     }
    //     ]
    // };
}

export async function getStaticProps(context) {
    // fetch data for a single meetup

    const meetUpId = context.params.meetupId;

    console.log(meetUpId);

    const client = await MongoClient.connect(
        "mongodb://hugomachefer:vzY78MBcRdw4lFhj@cluster0-shard-00-00.2jphb.mongodb.net:27017,cluster0-shard-00-01.2jphb.mongodb.net:27017,cluster0-shard-00-02.2jphb.mongodb.net:27017/?ssl=true&replicaSet=atlas-5092v5-shard-0&authSource=admin&retryWrites=true&w=majority"
     );
  
     const db = client.db("meetups"); // Replace with your database name
     const meetupsCollection = db.collection("meetups"); // Replace with your collection name
  
     const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetUpId)});
  
     client.close();

     return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }

    // return {
    //     props: {
    //         meetupData: {
    //             id: meetUpId,
    //             title:"A First Meetup",
    //             image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
    //             address: "Some street 5, Some city",
    //             description: "The meetup description"
    //         }
    //     }
    // }
}

export default MeetupDetails;