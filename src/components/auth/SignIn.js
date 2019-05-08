import * as React from 'react'
import { withRouter } from 'react-router-dom'


class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // TODO
    }
  }

  render () {
    return (
      <React.Fragment>
        SignIn
      </React.Fragment>
    )
  }
}

export default withRouter(SignIn)