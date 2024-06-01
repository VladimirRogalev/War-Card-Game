import React from 'react';
import {gamePage, startPage} from "../utils/constants.js";

const Result = ({changePage, name, result}) => {
    return (<div className="container text-center my-5 fw-medium ">
            <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto border border-primary bg-light ">
                    <h1 className="text-danger">Score</h1>
                    <p>{name}: {result.playerWins}</p>
                    <p>Computer: {result.compWins}</p>
                    <button className="btn btn-primary my-2 mx-1" onClick={() => changePage(gamePage)}>Again?</button>
                    <button className="btn btn-primary my-2 mx-1" onClick={() => changePage(startPage)}>New user
                    </button>
                </div>
            </div>
        </div>);
};

export default Result;