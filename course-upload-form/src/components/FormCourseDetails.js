import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Videocam from '@material-ui/icons/Videocam';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class FormCourseDetails extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  handleCapture = ({ target }) => {
      const fileReader = new FileReader();
      const name = target.accept.includes('image') ? 'images' : 'videos';

      fileReader.readAsDataURL(target.files[0]);
      fileReader.onload = (e) => {
          this.setState((prevState) => ({
              [name]: [...prevState[name], e.target.result]
          }));
      };
    }; 

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, classes } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Course Details" />
            <TextField
              placeholder="Enter Course Name"
              label="Course Name"
              onChange={handleChange('courseName')}
              defaultValue={values.courseName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Course Category"
              label="Course Category"
              onChange={handleChange('courseCategory')}
              defaultValue={values.ourseCategory}
              margin="normal"
              fullWidth
            />
            <br />
            Course Featured Image
            <br />
            <br />
            <input
              accept="image/*"
              
              style={{ display: 'none' }}
              id="icon-button-photo"
              onChange={this.handleCapture}
              multiple
              type="file"
            />
            <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera /> &nbsp; Upload
                    </IconButton>
            </label>
            <br />
            Course Video
            <br />
            <br />
            <input
              accept="video/*"
              
              style={{ display: 'none' }}
              id="icon-button-video"
              onChange={this.handleCapture}
              multiple
              type="file"
            />
            <label htmlFor="icon-button-video">
                    <IconButton color="primary" component="span">
                        <Videocam /> &nbsp; Upload
                    </IconButton>
            </label>
          
            
            {/* <Fragment>
                <input
                    accept="image/*"
                    
                    id="icon-button-photo"
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>

                <input
                    accept="video/*"
                    capture="camcorder"
                    
                    id="icon-button-video"
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-video">
                    <IconButton color="primary" component="span">
                        <Videocam />
                    </IconButton>
                </label>
            </Fragment> */}
          
            <TextField
              placeholder="Enter Course Description"
              label="Course Description"
              onChange={handleChange('courseDesc')}
              defaultValue={values.courseDesc}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormCourseDetails;
