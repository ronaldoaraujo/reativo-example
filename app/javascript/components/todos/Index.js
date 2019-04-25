import { hot } from 'react-hot-loader/root'
import React from 'react'

import Button from '@material-ui/core/Button'
import MaterialTable from 'material-table'
import { wrapper } from "reativo"

function Index({model, rows}) {
  return (
    <>
      <MaterialTable
        columns={[
          { title: 'ID', field: 'id' },
          { title: 'Title', field: 'title' },
          { title: 'Completed', field: 'completed' },
        ]}
        data={model}
        title="Todos"
        actions={[
          rowData => ({
            icon: 'create',
            iconProps: {'data-testid': `edit-${rowData.id}`},
            tooltip: 'Edit Todo',
            onClick: (event, rowData) => {
              Turbolinks.visit(`/todos/${rowData.id}/edit`)
            },
          })
        ]}
        options={{
          columnsButton: true,
          exportButton: true,
          actionsColumnIndex: -1,
        }}
        detailPanel={rowData => {
          return (
            <pre>
            {rowData.key}
            </pre>
          )
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
      <Button variant="contained" color="secondary" href="/todos/new">
        New Todo
      </Button>
    </>
  )
}

export default hot(wrapper(Index))
