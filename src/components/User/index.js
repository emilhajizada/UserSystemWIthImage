import React from 'react'

function User({name,desc,src}) {
    console.log(src);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={src}
        className="card-img-top"    
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {desc}
        </p>
        <a href="!#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  )
}

export default User