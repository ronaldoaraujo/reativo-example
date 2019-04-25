import React from 'react'

import { Field } from 'react-final-form'
import { TextField } from 'final-form-material-ui'
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';

export const validate = values => {
  // const errors = {};
  // if (!values.name) {
  //   errors.name = 'Required';
  // }
  // return errors;
};

function Form({ handleSubmit, reset, submitting, pristine, values }) {
  return (
    <form onSubmit={handleSubmit}>
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={8}>
          <Grid item xs={12}>
            <Field
              fullWidth
              name="title"
              component={TextField}
              type="text"
              label="Title"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              fullWidth
              name="completed"
              component={TextField}
              type="text"
              label="Completed"
            />
          </Grid>
          <Grid item style={{ marginTop: 16 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={submitting}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}

export default Form;