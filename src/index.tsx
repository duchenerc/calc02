import { render } from "react-dom";
import * as React from "react";

import "./style";

const Root = () =>
{
    return (
        <h1>Hello world!</h1>
    );
}

render(<Root />, document.getElementById("render"));
