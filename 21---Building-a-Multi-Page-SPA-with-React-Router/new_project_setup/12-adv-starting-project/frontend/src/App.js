import { RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage, {loader as eventDetailLoader } from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";
import RootLayout from "./pages/Root";
import { loader as eventsLoader } from "./pages/Events";
import { action as deleteEventAction } from "./pages/EventDetail";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // path: "/",
        element: <HomePage />,
      }, 
      {
        path: "events",
        element: <EventsRootLayout />,  
        children: [
          {
            index:true, // path: "",
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true, // path: "/",
                element: <EventDetailPage />,
                action: deleteEventAction
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction
              }    
            ]
          },
          { 
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction
          }
        ]
      },
    ],
  }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
