import React from 'react';
import { connect } from 'react-redux'
import { Routes } from '../constants/routes'
import jwtDecode from 'jwt-decode'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { actions } from '../utils/actionCreator'

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    constructor(props){
      super(props)
      this.state = {}
    }

    componentDidMount() {
      const { isAuthenticated, history: { push }, setToken } = this.props

      if (!isAuthenticated) {
        const token = localStorage.getItem('jwtToken')
        if (token) {
          const decode = jwtDecode(token)
          const date = moment(new Date()).valueOf()
          if (decode.exp < date) {
            localStorage.removeItem('jwtToken')
            push(Routes.SIGN_IN)
          } else {
            setToken(token)
            // TODO -> Fetch full user info if you need
          }
        } else {
          push(Routes.SIGN_IN)
        }
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.authReducer.isAuthenticated
    }
  }

  const mapDispatchToProps = dispatch => ({
    setToken: data => dispatch(actions.AUTH_USER.SUCCESS(data))
  })

  return withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate))
}