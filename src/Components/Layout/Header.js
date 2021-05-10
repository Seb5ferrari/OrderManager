import React from "react"
import { AppBar, Grid, Typography, IconButton } from "@material-ui/core"
import { Menu, ExpandMore } from "@material-ui/icons"

export default () => (
  <AppBar position="fixed">
    <Grid container>
      <Grid item xs={6} sm={6}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
          <Typography>Order Manager</Typography>
        </IconButton>
      </Grid>
      <Grid item xs={6} sm={6} />
    </Grid>
  </AppBar>
)
