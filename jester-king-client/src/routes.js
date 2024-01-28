import {
  createBrowserRouter,
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
import CreateSession from "./CreateSession";
import SpectatorWaitingJesters from "./spectator/SpectatorWaitingJesters";
import SpectatorWaitingVoters from "./spectator/SpectatorWaitingVoters";
import ShowVoteResult from "./spectator/ShowVoteResult";
import SpectatorVoteWinner from "./spectator/SpectatorVoteWinner";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'create-session',
    element: <CreateSession />
  },

  // Session/
  {
    path: "session/:sessionId",
    children: [
      {
        path: "player/register",
        element:  <PlayerRegister />
      },
      {
        path: "player/:playerId/submit-punchline",
        element: <SubmitPunchline />
      },
      {
        path: "player/:playerId/finish-submit",
        element: <FinishSubmit />
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
      },

      // Spectator/...
      {
        path: "spectator",
        children: [
          {
            path: "waiting-jesters",
            element: <SpectatorWaitingJesters />
          },
          {
            path: "waiting-voters",
            element: <SpectatorWaitingVoters />
          },
          {
            path: "show-vote-result",
            element: <ShowVoteResult />
          },
          {
            path: "vote-winner",
            element: <SpectatorVoteWinner />
          },
        ]
      }
    ]
  },
]);

export default routes