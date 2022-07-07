import React from "react";

function Score(props) {
  return (
    <div>
      <div className="score">
        <p>date: {props.score.date}</p>
        <p>score: {props.score.score}</p>
      </div>
    </div>
  );
}

export default Score;
