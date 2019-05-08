import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { publicRoutes } from './routes/index'
import requireAuth from './utils/requireAuth'

const App = () => {
  return (
    <React.StrictMode>
      <Switch>
        {publicRoutes.map(({path, component, exact}) => 
          <Route
            exact={exact}
            key={path}
            path={path}
            component={component}
          />
        )}
        {/* 
          Render private routes
         */}
        <Route path='/' component={requireAuth(() => <div>Private component</div>)}/>
      </Switch>
    </React.StrictMode>
  )
}

export default App


