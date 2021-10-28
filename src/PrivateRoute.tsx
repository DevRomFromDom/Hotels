import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "./store";

interface PrivateRouteProps {
    path: string;
    exact?: boolean;
    Component?: () => JSX.Element;
    isLoggedIn?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
    const dispatch = useDispatch();
    const { Component, isLoggedIn, path, ...rest } = props;
    const LSisLoggedIn = localStorage.getItem("isLoggedIn");
    useEffect(() => {
        if (!isLoggedIn && LSisLoggedIn === "true") {
            dispatch(logIn());
        }
    }, [dispatch, isLoggedIn, LSisLoggedIn]);

    if (isLoggedIn || LSisLoggedIn === "true") {
        if (path === "/") {
            return <Redirect to={{ pathname: "/content" }} />;
        } else {
            return <Route {...rest} component={Component} />;
        }
    } else {
        return <Redirect to={{ pathname: "/login" }} />;
    }
};
