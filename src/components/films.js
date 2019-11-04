import React from 'react'

const Films = ( props ) => {
    return (
    <div>
        {props.data.map((films) => (
        <div key={films.id}>
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{films.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{films.description}</h6>
            <p className="card-text">{films.director}</p>
            </div>
        </div>
        <br />
        </div>
        ))}
    </div>
    )
};

export default Films