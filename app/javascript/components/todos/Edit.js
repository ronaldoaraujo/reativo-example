import { hot } from 'react-hot-loader/root'
import React from 'react'

import {
  Typography,
  Button,
} from '@material-ui/core'
import Form from './Form'
import { Form as FinalForm } from 'react-final-form'
import { validate } from './Form'
import { RailsForm } from 'reativo'
import { wrapper } from "reativo"

function Edit({model}) {
  const { title, completed } = model
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Edit Todo
      </Typography>
      <RailsForm
        component={FinalForm}
        action='update'
        url={`/todos/${model.id}`}
        successUrl={`/todos/${model.id}`}
        validate={validate}
        initialValues={{ title, completed }}
        render={(props) => (
          <Form {...props} />
        )}
      />
      <Button variant="contained" color="secondary" href="/todos">
        Back to Todos
      </Button>
    </div>
  );
}

export default hot(wrapper(Edit))
