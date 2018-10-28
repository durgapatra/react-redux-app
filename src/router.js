import React from 'react'
import asyncComponent from './hoc/asyncRender'
import { Route, Switch, Redirect } from 'react-router-dom'

const Private = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            if (!localStorage.getItem('token')) {
                return (
                    <Redirect
                        to={{
                            pathname: '/login'
                        }}
                    />
                )
            } else {
                return <Component {...props} />
            }
        }}
    />
)
const AppLayout = asyncComponent(() =>
    import('./components/AppLayout').then(
        module => module.default
    )
)

const Login = asyncComponent(() =>
    import('./components/login').then(
        module => module.default
    )
)
const Home = asyncComponent(() =>
    import('./containers/Home').then(
        module => module.default
    )
)
const redirect = pathname => () => {
    return <Redirect to={{ pathname }} />
}

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Private component={AppLayout} />
        </Switch>
    )
}

export const ContentRoute = () => {
    return (
        <Switch>
            <Route exact path="/" render={redirect('home')} />
            <Route exact path="/home" component={Home} />

            {/* <Route exact path="/*" component={NotFound} /> */}
        </Switch>
    )
}
export default Routes