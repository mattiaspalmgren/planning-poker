import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";
import VoteButton from "../components/VoteButton";
import Chart from "../components/Chart";
import "./SessionPage.css";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const POINTS = [0.5, 1, 2, 4, 8, 12];

const SessionPage = () => {
  const [socket, setSocket] = useState();
  const [votes, setVotes] = useState([]);
  const [currentVote, setCurrentVote] = useState([]);
  const { pathname } = useLocation();
  const sessionId = pathname.replace("/", "");

  useEffect(() => {
    const ioSocket = io(`${SERVER_URL}/${sessionId}`);
    setSocket(ioSocket);
  }, [sessionId]);

  useEffect(() => {
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
