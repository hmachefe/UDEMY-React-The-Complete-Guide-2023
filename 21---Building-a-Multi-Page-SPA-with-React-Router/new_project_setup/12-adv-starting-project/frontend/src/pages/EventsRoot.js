import { Outlet } from "react-router-dom";
import EventsNavitation from "../components/EventsNavigation";

function EventsRootLayout() {
    return <>
        <EventsNavitation />
        <Outlet />
    </>
}

export default EventsRootLayout;