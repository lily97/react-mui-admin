import { Button } from "@mui/material";
import "./index.less";
const main = <div>123</div>;
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
    <div>
      <h1>Welcome to my app</h1>
      {main}
      <MyButton />
    </div>
  );
}

// ReactDOM.render(MyApp);
