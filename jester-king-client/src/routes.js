import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import App from './App';
import PlayerRegister from './player/Register'
import WaitingPlayer from "./player/WaitingPlayer";
import SubmitPunchline from "./player/SubmitPunchline";
import FinishSubmit from "./player/FinishSubmit";
import WaitingJesters from "./voter/WaitingJesters";
import SubmitVote from "./voter/SubmitVote";
import WaitingVoters from "./voter/WaitingVoters";
import VoteResult from "./voter/VoteResult";
import VoteWinner from "./voter/VoteWinner";


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
      },

      // Voter/...
      {
        path: "voter",
        children: [
          {
            path: "waiting-jesters",
            element: <WaitingJesters />
          },
          {
            path: "submit-vote",
            element: <SubmitVote />
          },
          {
            path: "waiting-voters",
            element: <WaitingVoters />
          },
          {
            path: "vote-result",
            element: <VoteResult />
          },
          {
            path: "vote-winner",
            element: <VoteWinner />
          },
        ]
      }
    ]
  },
]);

export default routes