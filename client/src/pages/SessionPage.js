import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import VoteButton from "../components/VoteButton";
import Chart from "../components/Chart";
import "./SessionPage.css";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const POINTS = [0.5, 1, 2, 4, 8, 12];
const defaultSession = {
  name: "",
  votes: [],
};

const SessionPage = () => {
  const [socket, setSocket] = useState();
  const [votes, setVotes] = useState([]);
  const [session, setSession] = useState(defaultSession);
  const [currentVote, setCurrentVote] = useState([]);
  const { pathname } = useLocation();
  const sessionId = pathname.replace("/", "");

  useEffect(() => {
    const ioSocket = io(`${SERVER_URL}/${sessionId}`);
    setSocket(ioSocket);
  }, [sessionId]);

  useEffect(() => {
    socket?.on("session-update", (session) => {
      const { votes, ...currentSession } = session;
      setVotes(votes);
      setSession(currentSession);
    });
    socket?.on("votes-update", (votes) => setVotes(votes));
  }, [socket]);

  const onClick = (size) => {
    const vote = { clientId: socket.id, value: size };
    setCurrentVote(vote);
    socket.emit("vote", vote);
  };

  const chartData = POINTS.map(
    (point) =>
      votes.map((vote) => vote.value).filter((value) => value === point).length
  );

  return (
    <>
      <h2 className={"SessionPage-heading"}>
        name: <span>{session.name}</span>
      </h2>
      <h2 className={"SessionPage-heading SessionPage-spacing"}>
        id: <span>{session.sessionId}</span>
      </h2>
      <Chart data={{ labels: POINTS, votes: chartData }} />
      <span className={"SessionPage-vote-heading"}>Your vote</span>
      <div className={"SessionPage-vote-buttons"}>
        {POINTS.map((point) => (
          <VoteButton
            key={point}
            point={point}
            currentVote={currentVote}
            onVote={onClick}
          />
        ))}
      </div>
    </>
  );
};

export default SessionPage;
