import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { io } from "socket.io-client";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const POINTS = [0.5, 1, 2, 4, 8];

const SessionPage = () => {
  const [socket, setSocket] = useState();
  const [votes, setVotes] = useState([]);
  const { pathname } = useLocation();
  const sessionId = pathname.replace("/", "");

  useEffect(() => {
    const ioSocket = io(`${SERVER_URL}/${sessionId}`);
    setSocket(ioSocket);
  }, [sessionId]);

  useEffect(() => {
    socket?.on('votes-update', (votes) => setVotes(votes));
  }, [socket])

  return (<div>
    <h1>SessionPage</h1>
    {POINTS.map(size => (
      <button key={size} onClick={() => socket.emit("vote", size)}>{size}</button>
    ))}
    {votes.map(vote => (
      <span key={vote}>{vote}</span>
    ))}
  </div>)
}

export default SessionPage;
