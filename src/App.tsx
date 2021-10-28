import React from "react";
import styles from "./App.module.scss";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./Content";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./Login";

const App = () => {
    const authStatus = useSelector((state: RootState) => state.auth.isLoggedIn);
    return (
        <div className={styles.app__wrapper}>
            <Router>
                <Switch>
                    <PrivateRoute path='/' isLoggedIn={authStatus} exact />
                    <PrivateRoute path='/content' isLoggedIn={authStatus} Component={Content} />
                    <Route path='/login' component={Login} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
