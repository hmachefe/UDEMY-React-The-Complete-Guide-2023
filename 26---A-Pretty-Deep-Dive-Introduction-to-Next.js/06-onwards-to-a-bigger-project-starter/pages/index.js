import { MongoClient } from "mongodb"; // will not be included in the client side bundle
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";


function HomePage(props) {

   return <Fragment>
      <Head>
         <title>React Meetups</title>   
      </Head>      
      return <MeetupList meetups={props.meetups}/>
   </Fragment>
}

// // reserved name. This server side function runs for every incoming request 
// export async function getServerSideProps(context) {
//    // fetch data from an api or file system
//    const req = context.req; // may be used for authentication 
//    const res = context.res;
//    return {
//       props: {
//          meetups: DUMMY_MEETUPS
//       }
//       // revalidate ... WOULD MAKE NO SENSE HERE
//    }
// }


// reserved name, used (in production) DURING THE BUILD PRCESS. Must be async
export async function getStaticProps(context) { // reserved name, while  npm run build   is applied
// context has not been used here. But could have been

   const client = await MongoClient.connect(
      "mongodb://hugomachefer:vzY78MBcRdw4lFhj@cluster0-shard-00-00.2jphb.mongodb.net:27017,cluster0-shard-00-01.2jphb.mongodb.net:27017,cluster0-shard-00-02.2jphb.mongodb.net:27017/?ssl=true&replicaSet=atlas-5092v5-shard-0&authSource=admin&retryWrites=true&w=majority"
   );

   const db = client.db("meetups"); // Replace with your database name
   const meetupsCollection = db.collection("meetups"); // Replace with your collection name

   const meetups = await meetupsCollection.find().toArray();

   client.close();

   return {
      // we can load data before this component is executed. So that this comp can be rendered with the required data
      // we could access a file system here. Or securely connect to a database. (e.g. Fetching data from on api)
      props: { // match the props parameter passed in HomePage() function
         meetups: meetups.map(meetup => ({
            title: meetup.title,
            description: meetup.description,
            address: meetup.address,
            image: meetup.image,
            id: meetup._id.toString(),
         })), // this code will never execute on the client side. Neither server side at run time
         // with revalidate, we can insure that this page updates regularly, after deployment
         // but sometimes, we really want to regenerate this page for evey incoming requests 
         revalidate: 10 // or 1, or 3600 (Depending on how often data-populated UI would need to be refreshed)
      }
   };
}

export default HomePage;