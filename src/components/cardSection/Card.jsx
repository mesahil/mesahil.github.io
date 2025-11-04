import "./card.css";

const ShowCards = ({ dataArray }) => {
  return (
    <section className="list-wrapper">
      {dataArray.map((data, index) => (
        <div className="item" key={index}>
          <span className="icon">{data.icon}</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {data.subServices && data.subServices.length > 0 && (
            <ul className="sub-services">
              {data.subServices.map((subService, subIndex) => (
                <li key={subIndex}>{subService}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default ShowCards;
