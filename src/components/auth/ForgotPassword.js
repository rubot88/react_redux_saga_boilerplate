import * as React from 'react'
import { withRouter } from 'react-router-dom'


class ForgotPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // TODO
    }
  }

  render () {
    return (
      <React.Fragment>
        ForgotPassword
      </React.Fragment>
    )
  }
}

export default withRouter(ForgotPassword)