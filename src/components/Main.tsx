import { IEpisode } from "../propsTypes/types";
import { episodeCode } from "../utils/episodeCode";
import { isSearchTerminEpOrSum } from "../utils/isSearchTerminEpOrSum";
import { removeHtmlTags } from "../utils/removeHtmlTags";
import React, { useEffect, useState } from "react";

function Main(): JSX.Element {
  const [data, setData] = useState<IEpisode[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEpisodeList = async () => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes");
      const jsonBody: IEpisode[] = await response.json();
      setData(jsonBody);
    };

    fetchEpisodeList();
  }, []);

  const tvShowData = [...data];
  const filteredTvShowData = isSearchTerminEpOrSum(tvShowData, searchTerm);
  return (
    <>
      <div className="Main">
        <input
          placeholder="Type your search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        Displaying {filteredTvShowData.length} out of {tvShowData.length}
        <div className="episodeList">
          {filteredTvShowData.map((obj, id) => (
            <div className="episode" key={id}>
              <div>
                <h3 className="episodeTitle">
                  {obj.name}
                  <span> </span> <span>-</span> <span> </span>
                  {episodeCode(obj)}
                </h3>
              </div>
              {obj.image && (
                <img className="image" src={obj.image.medium} alt="" />
              )}
              {obj.image === null && <i>Image Unavailable</i>}
              <p className="summary">{removeHtmlTags(obj)}</p>
            </div>
          ))}
        </div>
      </div>
      <p>Put licensing here</p>
    </>
  );
}

export default Main;
