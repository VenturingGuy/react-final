import React from 'react';

function Description(props) {
    const { name, date, desc } = props
    return(
        <div className='Content'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <p>{desc}</p>
        </div>
)
}

export default Description;