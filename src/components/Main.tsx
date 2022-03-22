import episodes from "../data/episodes.json";
import { episodeCode } from "../utils/episodeCode";

function Main(): JSX.Element {
  const tvShowData = [...episodes];

  console.log(tvShowData);

  return (
    <>
      <div className="Main">
        <div className="episodeList">
          {tvShowData.map((obj, id) => (
            <div className="episode" key={id}>
              <h3 className="episodeTitle">
                {obj.name}
                <span> </span> <span>-</span> <span> </span>
                {episodeCode(obj)}
              </h3>
              <img src={obj.image.medium} alt="" />
              <p className="summary">
                {obj.summary.slice(3, obj.summary.length - 4)}
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
