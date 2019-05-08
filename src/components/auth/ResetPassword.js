import * as React from 'react'
import { withRouter } from 'react-router-dom'


class ResetPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // TODO
    }
  }

  render () {
    return (
      <React.Fragment>
        ResetPassword
      </React.Fragment>
    )
  }
}

export default withRouter(ResetPassword)