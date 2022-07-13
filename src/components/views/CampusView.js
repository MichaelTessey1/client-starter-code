/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <img height="25%" width="25%" src={campus.imageURL} alt="campus" />
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      { campus.students.length > 0 ? <p>Students from {campus.name}</p> : <p>There are no students currently enrolled in {campus.name}</p> }
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>             
          </div>
        );
      })}
      <Link to={'/campuses'}>Back to Campuses</Link>
    </div>
  );
};

export default CampusView;