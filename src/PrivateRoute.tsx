import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
    path: string;
    exact?: boolean;
    component?: () => JSX.Element;
    isLoggedIn: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const { component, isLoggedIn, ...rest } = props;
    const LSisLoggedIn = localStorage.getItem("isLoggedIn");
    return (
        <Route
            {...rest}
            component={component}
            render={(props) =>
                isLoggedIn || LSisLoggedIn === "true" ? (
                    <Redirect to={{ pathname: "/content" }} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
};
