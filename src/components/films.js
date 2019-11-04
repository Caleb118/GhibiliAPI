import React from 'react'

const Films = ( props ) => {
    return (
    <div>
        {props.data.map((films) => (
        <div key={films.id} >
        <div className="card" style={pStyle}>
        <div className="card-header">{films.title}</div>
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">{films.description.substring(0,150)}...</h6>
            <p className="card-text"><b>Director:</b> {films.director}</p>
            <a href={films.url} target="_blank"><p className="card-text">{films.url}</p></a>
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


export default Films