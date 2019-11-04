import React from 'react'

const People = ( props ) => {
    return (
    <div>
        {props.data.map((people) => (
        <div key={people.id}>
        <div className="card" style={pStyle}>
        <div className="card-header">{people.name}</div>
            <div className="card-body">
            <p className="card-text"><b>Age:</b> {people.age}</p>
            <p className="card-text"><b>Gender:</b> {people.gender}</p>
            <p className="card-text"><b>Eye Color:</b> {people.eye_color}</p>
            <p className="card-text"><b>Hair Color:</b> {people.hair_color}</p>
 
            <a href={people.url} target="_blank"><p className="card-text">{people.url}</p></a>
            </div>
        </div>
        
        </div>
        ))}
    </div>
    )
};

const pStyle = {
    width: '32%',
    marginLeft: '1%',
    marginBottom: '1%',
    float: 'left'
  };


export default People