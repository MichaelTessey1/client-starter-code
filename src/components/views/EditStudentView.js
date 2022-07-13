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

const EditStudentView = (props) => {
  const {handleChange, handleSubmit, studentInfo } = props;
  const student = studentInfo.student;

  console.log("view", student);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit Student
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} defaultValue={student.firstname} autoComplete='off' required></input>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} defaultValue={student.lastname} autoComplete='off' required />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} autoComplete='off' defaultValue={student.email} required />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>ImageURL: </label>
          <input type="url" name="imageURL" onChange={(e) => handleChange(e)} defaultValue={student.imageURL} autoComplete='off' />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input type="number" name="gpa" onChange={(e) => handleChange(e)} min="0.0" max ="4.0" step ="0.1" defaultValue={student.gpa} autoComplete='off' required />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>CampusId: </label>
          <input type="text" name="campusId" onChange={(e) => handleChange(e)} defaultValue={student.campusId} autoComplete='off' />
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        <br/>
        <Link to ={'/students'}>Back</Link>
        </div>
      </div>
    
  )
}

export default EditStudentView;