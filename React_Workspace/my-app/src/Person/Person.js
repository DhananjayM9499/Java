import "./Person.css";
function Person(props) {
  return (
    <div className="item">
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
    </div>
  );
}
export default Person;
