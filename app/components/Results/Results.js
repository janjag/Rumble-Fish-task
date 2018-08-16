import React from 'react';

import Loader from '../Loader/Loader';

const Results = props => {
    let data = <Loader />;
    if (!props.loading) {
        data = (<p className="AppResult">Calculated time <b className="AppValue">{props.value}s</b> at <b>{props.time}</b></p>);
    }
    return (
        <div className="AppResults">
            <h1 className="AppTitle">Average time of adding a block to the ethereum blockchain.</h1>
            {data}
            <button
                className="AppButton"
                onClick={props.refresh}>
                Refresh
            </button>
        </div>
    );
}

export default Results;