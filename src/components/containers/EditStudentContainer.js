import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";


import EditStudentView from '../views/EditStudentView';
import { editStudentThunk, fetchStudentThunk} from '../../store/thunks'; 


class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          student: this.props.student,
          studentId: this.props.match.params.id,
          redirect: false, 
          redirectId: null,
        };
    }
    
    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.state.studentId);
    }
    
    //change state values based on user input
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }


    handleSubmit = async event => {
      event.preventDefault();
      let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        imageURL: this.state.imageURL,
        email: this.state.email,
        gpa: this.state.gpa,
        campusId: this.state.campusId,
        id: this.state.studentId
      };

        if (typeof student.imageURL === undefined) {
          student.imageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
        }
        


        

        let newStudent = await this.props.editStudent(student);


        console.log("new student: ", newStudent)
        this.setState({
          firstname: "", 
          lastname: "", 
          imageURL: "",
          email: "",
          gpa: "",
          campusId: null, 
          redirect: true, 
          redirectId: this.state.studentId
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      if(this.state.redirect) {
        return (<Redirect to={`/student/${this.state.redirectId}`}/>)
      }
        return (
          <EditStudentView 
            studentInfo = {this.state}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}



const mapState = (state) => {
    return {
      student: state.student,
    };
  };
  

const mapDispatch = (dispatch) => {
    return({
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
    })
}

EditStudentContainer.propTypes = {
    fetchStudent: PropTypes.func.isRequired,
    editStudent: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(EditStudentContainer);