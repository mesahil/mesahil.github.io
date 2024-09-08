import "./card.css";

const ShowCards = ({ dataArray }) => {
  return (
    <section className="list-wrapper">
      {dataArray.map((data, index) => (
        <div className="item" key={index}>
          <span className="icon">{data.icon}</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ShowCards;
