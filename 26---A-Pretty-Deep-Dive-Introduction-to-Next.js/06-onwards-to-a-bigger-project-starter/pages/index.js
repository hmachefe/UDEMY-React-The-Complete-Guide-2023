import MeetupList from "../components/meetups/MeetupList"

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

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default HomePage;