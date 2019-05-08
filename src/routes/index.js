import { Routes } from '../constants/routes'

import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import ForgotPassword from '../components/auth/ForgotPassword'
import ResetPassword from '../components/auth/ResetPassword'

export const publicRoutes = [
  {
    exact: true,
    path: Routes.SIGN_IN,
    component: SignIn
  },
  {
    exact: true,
    path: Routes.SIGN_UP,
    component: SignUp
  },
  {
    exact: true,
    path: Routes.FORGOT_PASSWORD,
    component: ForgotPassword
  },
  {
    exact: true,
    path: Routes.RESET_PASSWORD,
    component: ResetPassword
  }
]

export const privateRoutes = () => [
  // TODO -> Add private routes
]