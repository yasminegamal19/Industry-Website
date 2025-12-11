import React from 'react';
import './Results.modules.css';
import ResultItems from './ResultItems';

const Results = () => {
    return (
        <div className='results py-5'>
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="content row justify-content-center align-items-center">
                    <ResultItems />
                </div>
            </div>
        </div>
    );
}

export default Results;
