import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk, fetchCampusThunk} from '../../store/thunks';

class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          campus: this.props.campus,
          campusId: this.props.match.params.id,
          redirect: false, 
          redirectId: null,
        };
    }

    componentDidMount() {
        //getting campus ID from url
        this.props.fetchCampus(this.state.campusId);
    }

    //change state values based on user input
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        let campus = {
            name: this.state.name,
            imageURL: this.state.imageURL,
            address: this.state.address,
            description: this.state.description,
            id: this.state.campusId
        };

        if (typeof campus.imageURL === undefined) {
            campus.imageURL = "https://w7.pngwing.com/pngs/244/287/png-transparent-google-map-maker-pin-computer-icons-google-maps-map-icon-angle-black-map.png"
          }

          let newCampus = await this.props.editCampus(campus);

          this.setState({
            name: "", 
            imageURL: "", 
            address: "",
            description: "", 
            redirect: true, 
            redirectId: this.state.campusId
          });
        }

        componentWillUnmount() {
            this.setState({redirect: false, redirectId: null});
        }

        render() {
            if(this.state.redirect) {
              return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
            }
            return (
                <EditCampusView 
                campusInfo = {this.state}
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit}      
                />
            );
          }
      }

      const mapState = (state) => {
        return {
          campus: state.campus,
        };
      };

      const mapDispatch = (dispatch) => {
        return({
            fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
            editCampus: (campus) => dispatch(editCampusThunk(campus)),
        })
    }

    EditCampusContainer.propTypes = {
        fetchCampus: PropTypes.func.isRequired,
        editCampus: PropTypes.func.isRequired,
    };

    export default connect(mapState, mapDispatch)(EditCampusContainer);