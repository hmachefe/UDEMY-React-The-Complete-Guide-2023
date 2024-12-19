import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
 {
    id: "m1",
    title: "A first meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
    address: "add",
    description: "desc"
 },
 {
    id: "m2",
    title: "A second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
    address: "add 2",
    description: "desc 2"
 }
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>
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
   return {
      // we can load data before this component is executed. So that this comp can be rendered with the required data
      // we could access a file system here. Or securely connect to a database. (e.g. Fetching data from on api)
      props: { // match the props parameter passed in HomePage() function
         meetups: DUMMY_MEETUPS, // this code will never execute on the client side. Neither server side at run time
         // with revalidate, we can insure that this page updates regularly, after deployment
         // but sometimes, we really want to regenerate this page for evey incoming requests 
         revalidate: 10 // or 1, or 3600 (Depending on how often data-populated UI would need to be refreshed)
      }
   };
}

export default HomePage;