import "./VoteButton.css";

const VoteButton = ({ point, currentVote, onVote }) => {
  const active = currentVote.value === point ? "VoteButton--active" : "";

  return (
    <button className={`VoteButton ${active}`} onClick={() => onVote(point)}>
      {point}
    </button>
  );
};

export default VoteButton;
