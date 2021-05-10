import React from "react"
import { Grid, Paper } from "@material-ui/core"

export default classes => (
  <Grid container className={classes.container}>
    <Grid item className={classes.item} xs={6} sm={6}>
      <Paper className={classes.paper} />
    </Grid>
  </Grid>
)
