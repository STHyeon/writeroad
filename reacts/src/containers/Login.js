import React, { useState } from "react";
import Common from "./Common";
import { Auth } from "../components";

const Login = () => {
    const [mode, setMode] = useState(true);
    return (
        <Common>
            <Auth mode={mode} />
        </Common>
    );
};

export default Login;
