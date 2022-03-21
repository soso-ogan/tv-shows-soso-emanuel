import episodes from "../data/episodes.json";
import { episodeCode } from "../utils/episodeCode";

function Main(): JSX.Element {
  const tvShowData = [...episodes];

  console.log(tvShowData);

  return (
    <>
      <div className="episodeList">
        {tvShowData.map((obj, id) => (
          <div className="eachEpisode" key={id}>
            {obj.name}
            <span> </span> <span>-</span> <span> </span>
            {episodeCode(obj)}
            <p>
              <img src={obj.image.medium} alt="" />
            </p>
          </div>
        ))}
      </div>
      <p>Put licensing here</p>
    </>
  );
}

export default Main;
