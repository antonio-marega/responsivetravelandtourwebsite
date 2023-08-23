import "./Tripstyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <a href={props.url} className={props.btnClass}>
        click here
      </a>
    </div>
  );
}

export default TripData;
