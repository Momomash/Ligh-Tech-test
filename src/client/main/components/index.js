import React from 'react';
import {hot} from 'react-hot-loader/root';
import store from './../redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    NotFoundScreen,
    GiraffesScreen,
    ControlScreen,
    EmployeesScreen,
    SettingsScreen,
    SupportScreen,
    HomeScreen
} from '../screens'
import {WrapperApp} from '../components/BaseComponents'
import '@/assets/css/style.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <WrapperApp>
                    <Switch>
                        <Route path="/" component={HomeScreen} exact/>
                        <Route path="/control" component={ControlScreen}/>
                        <Route path="/employees" component={EmployeesScreen}/>
                        <Route path="/giraffes" component={GiraffesScreen}/>
                        <Route path="/settings" component={SettingsScreen}/>
                        <Route path="/support" component={SupportScreen}/>
                        <Route path="*">
                            <NotFoundScreen/>
                        </Route>
                    </Switch>
                </WrapperApp>
            </Router>
        </Provider>

    )
}

export default hot(App)
