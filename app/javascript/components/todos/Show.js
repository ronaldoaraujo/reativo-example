import { hot } from 'react-hot-loader/root'
import React from 'react'

import {
  Typography,
  Button,
} from '@material-ui/core'

import { wrapper } from "reativo"

function Show({model}) {
  const { id } = model

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Todo
      </Typography>
      <p>Title: {model.title}</p>
      <p>Completed: {model.completed}</p>
      <Button variant="contained" color="primary" href={`/todos/${id}/edit`}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" href="/todos">
        Back to Todos
      </Button>
    </div>
  );
}

export default hot(wrapper(Show))
