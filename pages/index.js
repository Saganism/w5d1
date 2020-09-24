import { useState } from "react";
import MsgStore from "../store/msgStore";

const Home = () => {
  const [msg, setMsg] = useState("");
  return (
    <div>
      component #1 <Input />
      <br />
      component #2 <Msg />
    </div>
  );
};

const Input = (props) => {
  const {msg, setMsg} = MsgStore();
  return (
    <input value={msg} onChange={(e) => setMsg(e.target.value)} />
  );
};

const Msg = () =>{
  const { msg } = MsgStore();
  return <h2>{msg}</h2>

}

export default Home;

