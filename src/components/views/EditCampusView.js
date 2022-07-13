import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const EditCampusView = (props) => {
    const {handleChange, handleSubmit, campusInfo, description } = props;
    const campus = campusInfo.campus;

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <div className={classes.formContainer}>
            <div className={classes.formTitle}>
              <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
                Edit Campus
              </Typography>
            </div>
            <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
              <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
              <br/>
              <input type="text" name="name" onChange ={(e) => handleChange(e)} defaultValue={campus.name} autoComplete='off' required />
              <br/>
              <br/>
    
              <label style={{color:'#11153e', fontWeight: 'bold'}}>ImageURL: </label>
              <br/>
              <input type="url" name="imageURL" onChange={(e) => handleChange(e)} defaultValue={campus.ImageURL} autoComplete='off' />
              <br/>
              <br/>
    
              <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
              <br/>
              <input type="text" name="address" onChange={(e) => handleChange(e)} defaultValue={campus.address} autoComplete='off' required />
              <br/>
              <br/>
    
              <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
              <br/>
              <textarea id="description" name="description" value={description} rows="4" cols="50" onChange={(e) => handleChange(e)} defaultValue={campus.name} autoComplete='off' />
              <br/>
              <br/>
    
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <br/>
              <br/>
            </form>
            <br/>
            <Link to ={'/campuses'}>Back</Link>
            </div>
          </div>
        
      )
    }
    
    export default EditCampusView;