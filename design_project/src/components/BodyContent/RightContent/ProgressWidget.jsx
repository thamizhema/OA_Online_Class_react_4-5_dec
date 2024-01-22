import React from "react";

export default function ProgressWidget() {
  return (
    <div className="progress-div">
      <div className="top">
        <span className="st">Your Storage</span>
        <span className="sp">59.6%</span>
      </div>
      <div className="bottom">
        <div class="pr-status">70 GB of 100 GB are used</div>
        <div class="pr">
          <div className="bg-prog"></div>
        </div>
      </div>
    </div>
  );
}
