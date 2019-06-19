
import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'

import Transition from '../component/Transition'
import CssTransition from '../component/CssTransition'

const Routes = () => {
    return <HashRouter>
        <Switch>
                <Route exact path='/' >
                    <Redirect to='/transition'></Redirect>
                </Route>
                <Route exact path='/transition' component={Transition}/>
                <Route exact path='/cssTransition' component={CssTransition}/>
        </Switch>
    </HashRouter>
}

export default Routes