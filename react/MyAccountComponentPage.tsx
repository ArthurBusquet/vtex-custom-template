import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import MyAccountComponent from './components/MyAccountComponent'

const MyAccountComponentPage = () => (
  <div>
    <Route path="/my-account-component" exact component={MyAccountComponent} />
  </div>
)

export default MyAccountComponentPage
