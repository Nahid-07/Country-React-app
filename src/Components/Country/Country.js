import React from "react";

const Country = (props) => {
  console.log(props);
  const { flags, name, area, population } = props.country;
  return (
    <div className="container">
      <div className="card shadow" style={{width: "18rem"}}>
        <img src={flags.png} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name.common}</h5>
          <p>Total area :{area}</p>
          <p>Population :{population}</p>
        </div>
      </div>
    </div>
  );
};

export default Country;
