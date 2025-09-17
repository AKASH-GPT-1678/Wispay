import React from 'react';
import "./rewards.css";
import Boxes from './Boxes';

const RewardsOffers = () => {
    React.useEffect(() => {

    }, []);

    return (
        <div id='main-bar'>
            <div id='headings'>
                <button>FEATURE</button>
                <h1>Future Banking you need</h1>
                <div className='mid-text'>

                    <p >
                        Whether you're a small business or a large corporation ,

                    </p>
                    <p >
                        we have a thats for you

                    </p>

                </div>


            </div>

            <Boxes />



        </div>
    )
}

export default RewardsOffers