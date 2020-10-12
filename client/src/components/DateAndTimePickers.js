import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



export default function DateAndTimePickers(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.dateChange(event);
  }

  return (
    
      <TextField
        id="datetime-local"
        label={props.label}
        name={props.label}
        onChange={(event)=>{handleChange(event)}}
        type="datetime-local"
        data-parse="date"
        defaultValue="2020-10-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    
  );
}