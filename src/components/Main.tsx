import episodes from "../data/episodes.json";
import { episodeCode } from "../utils/episodeCode";
import { isSearchTerminEpOrSum } from "../utils/isSearchTerminEpOrSum";
import React, { useState } from 'react';

function Main(): JSX.Element {
  const tvShowData = [...episodes];
  const [searchTerm, setSearchTerm] = useState('')
  const filteredTvShowData =  isSearchTerminEpOrSum(tvShowData,searchTerm)

  return (
    <>
      <div className="Main">
      <input
        placeholder="Type your search"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value) }
      />
        <div className="episodeList">
          {filteredTvShowData.map((obj, id) => (
            <div className="episode" key={id}>
              <div><h3 className="episodeTitle">
                {obj.name}
                <span> </span> <span>-</span> <span> </span>
                {episodeCode(obj)}
              </h3></div>
              <img src={obj.image.medium} alt="" />
              <p className="summary">
                {obj.summary.replace(/(<([^>]+)>)/ig, "")}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p>Put licensing here</p>
    </>
  );
}

export default Main;
