import React, {useState} from 'react';
import {gamePage} from "../utils/constants.js";


const Start = ({changePage, changeName}) => {
    const [name, setName] = useState('');

    const handleClickStart = () => {
        changePage(gamePage);
        changeName(name);
    };
    console.log('render start');
    return (
        <div className="container text-center my-5">
            <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto  border border-primary bg-light">
                    <h1 className="fw-bolder">Ready For War!</h1>
                    <p><input
                        value={name}
                        onChange={e => setName(e.target.value.toUpperCase())}
                        type={'text'}
                        placeholder={'Enter your name'}/></p>
                    <button className="btn btn-primary my-2" onClick={handleClickStart}>Start</button>
                </div>
        </div>
        </div>
    );
};

export default Start;