import { useTransition } from "@remix-run/react";
import React from 'react';


const GlobalLoading = () => {
    const transition = useTransition();
    const active = transition.state !== "idle";


    return (
        <div className="spinner">{active ? "Loading..." : null}</div>
    );
}

export default GlobalLoading;