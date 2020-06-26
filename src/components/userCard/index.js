import React from "react";
import "./style.css";

function UserCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
