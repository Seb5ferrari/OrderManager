import React from "react"
import { AppBar, Tabs, Tab, withStyles } from "@material-ui/core"
import {
  DateRangeRounded,
  PaymentRounded,
  ReceiptRounded
} from "@material-ui/icons"

const style = theme => ({
  appBar: {
    top: "auto",
    bottom: 0
  }
})

export default withStyles(style)(({ classes }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Tabs value={0} textColor="secondary" variant="fullWidth" centered>
      <Tab
        icon={<DateRangeRounded fontSize="small" />}
        key="Dashboard"
        label="Dashboard"
      />
      <Tab
        icon={<ReceiptRounded fontSize="small" />}
        key="Orders"
        label="Orders"
      />
      <Tab
        icon={<PaymentRounded fontSize="small" />}
        key="Payments"
        label="Payments"
      />
    </Tabs>
  </AppBar>
))
