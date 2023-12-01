import React from "react";

function Clear({ handleClear }) {
    return(
        <div className="clear_btn">
            <button onClick={handleClear}>Clear All</button>
        </div>
    )
}

export default Clear;