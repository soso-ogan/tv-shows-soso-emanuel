import episodes from "../data/episodes.json";

function Main(): JSX.Element {
  const tvShowData = [...episodes];

  console.log(tvShowData);

  return (
    <>
      <ul>
        {tvShowData.map((obj, id) => (
          <li key={id}>
            {obj.name}
            {obj.season}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;
