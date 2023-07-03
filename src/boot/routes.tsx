import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../containers/baseLayout'
import ProductsList from '../pages/products/productsList'
import { routing } from './routing'
import ProductDetails from 'src/pages/products/productDetails'

const Routes = () => (
  <Switch>
    <Layout>
      <Route exact path={routing.products.pattern} component={ProductsList} />
      <Route exact path={routing.product.pattern} component={ProductDetails} />
    </Layout>
  </Switch>
)

export default Routes
