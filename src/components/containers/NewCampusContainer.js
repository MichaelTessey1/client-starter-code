/*==================================================
NewCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';


class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = { 
          name: "", 
          imageURL: "", 
          address: "",
          description: "",
          redirect: false, 
          redirectId: null
        };
    }

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
            description: this.state.description
        };

        if (campus.imageURL.length === 0) {
            campus.imageURL = "https://w7.pngwing.com/pngs/244/287/png-transparent-google-map-maker-pin-computer-icons-google-maps-map-icon-angle-black-map.png"
        }
        
        let newCampus = await this.props.addCampus(campus);

        this.setState({
          name: "", 
          imageURL: "", 
          address: "",
          description: "", 
          redirect: true, 
          redirectId: newCampus.id
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
          <NewCampusView 
            description={this.state.description}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);