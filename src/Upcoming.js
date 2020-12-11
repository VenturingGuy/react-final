import React from 'react';
import Description from './Description.js';
import data from './DescList.json';
import './Upcoming.css'

function Upcoming() {
    const game_info = data.map(({ name, date, desc }) => {
        return (
            <div className='Upcoming'>
                <Description
                  name={name}
                  date={date}
                  desc={desc}
                />
            </div>
        );
    });
    return <div className='game_info'>{game_info}</div>;
}

export default Upcoming;