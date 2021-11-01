import React from "react";

export default function ProgressBar({ session,currentDuration }) {
    const value = 100 - Math.floor((100 * session?.timeRemaining) / (currentDuration * 60))

    return (
        <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow= {value} // TODO: Increase aria-valuenow as elapsed time increases
          style={{ width: `${value}%` }} // TODO: Increase width % as elapsed time increases
        />
      </div>
    );
};