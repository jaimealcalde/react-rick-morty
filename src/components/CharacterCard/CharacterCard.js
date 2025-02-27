/* eslint-disable no-console */
import React from "react";
import { Link } from "react-router-dom";

import "./CharacterCard.scss";

import * as routes from "../../constants/routes";

function CharacterCard({
  characterId,
  name,
  image,
  species,
  status,
  origin,
  location,
}) {
  console.log(location);
  let locationId = location.split("/");
  locationId = locationId[locationId.length -1];
  console.log(locationId);

  return (
    <div className="col col-12 col-sm-6 col-xl-3 CharacterCard">
      <img className="CharacterCard__img" src={image} alt="" />
      <Link to={`${routes.CHARACTER}/${characterId}`}>
        <h3 className="CharacterCard__name h4">{name}</h3>
      </Link>
      <div className="CharacterCard__meta">
        <Link
          className="CharacterCard__meta-item"
          to={`${routes.LOCATION}/${locationId}`} // locationId
        >
          {origin.name}
        </Link>
        <p className="CharacterCard__meta-item">|</p>
        <p className="CharacterCard__meta-item">{status}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
