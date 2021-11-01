import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

export default function Session ({ session, currentDuration }) {
    if (!session) return null;

    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {minutesToDuration(currentDuration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <ProgressBar session={session} currentDuration={currentDuration} />
          </div>
        </div>
      </div>
    );
};