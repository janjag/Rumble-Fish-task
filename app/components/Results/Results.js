import React from 'react';

const Results = props => {
    return(
        <div className="AppResults">
            <h1 className="AppTitle">Average time of adding a block to the ethereum blockchain.</h1>
            <p className="AppResult">Calculated time <b className="AppValue">{props.value}s</b> at <b>{props.time}</b></p>
            <button
                className="AppButton"
                onClick={props.refresh}>
                Refresh
            </button>
        </div>
    );
}

export default Results;