import { RouterProvider, createBrowserRouter} from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventsRootLayout from "./pages/EventsRoot";
import RootLayout from "./pages/Root";
import { loader as eventsLoader } from "./pages/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
            element: <EventDetailPage />,
          },
          { 
            path: "new",
            element: <NewEventPage />
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />
          }      
        ]
      },
    ],
  }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;