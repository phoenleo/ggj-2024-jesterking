import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App';
import PlayerRegister from './player/Register'
import WaitingPlayer from "./player/WaitingPlayer";
import SubmitPunchline from "./player/SubmitPunchline";
import FinishSubmit from "./player/FinishSubmit";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // Session/
  {
    path: "session/:sessionId",
    children: [
      
      // Player/...
      {
        path: "player",
        children: [
          {
            path: "register",
            element: <PlayerRegister />
          },
          {
            path: "waiting-player",
            element: <WaitingPlayer />
          },
          {
            path: "submit-punchline",
            element: <SubmitPunchline />
          },
          {
            path: "finish-submit",
            element: <FinishSubmit />
          },
        ]
      }
    ]
  },
]);

export default routes