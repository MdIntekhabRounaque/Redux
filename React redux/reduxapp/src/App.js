import './App.css';
import {useSelector , useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index";

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h2>using React and Redux</h2>

      <div className="quantity">
        <a className="quantity_minus" title="Decreament"
        onClick={()=>dispatch(decNumber(2))}><span>-</span></a>
        <input name="quantity" type="text" className="quantity_input" value={myState} />
        <a className="quantity_plus" title="Increament"
        onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
      </div>

    </div>
    </>
  );
}

export default App;
