import React from "react"
import { render } from "react-dom"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import { blue, grey } from "@material-ui/core/colors"
import App from "./Components/App"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[400]
    },
    secondary: {
      main: blue["A200"]
    }
  },
  spacing: 10
})

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
