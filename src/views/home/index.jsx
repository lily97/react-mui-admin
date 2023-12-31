import { Button } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import login  from '../login'
import "./index.less";
function MyButton() {
  return (
    <div>
      <Button>I'm a button</Button>
      <span className="primary">11111111111</span>
    </div>
  );
}

export default function MyApp() {
  return (
    <>
      <Link to="/login">登录</Link>
      <MyButton />
    </>
  );
}

render(
  <Router>
    <Route path="login" component={login} />
  </Router>,
  document.body
);
