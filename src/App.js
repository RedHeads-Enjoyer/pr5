import {useDispatch, useSelector} from "react-redux";
import {changeStatus} from "./licenseSlice";

function App() {
  const dispatch = useDispatch();
  const checkboxStatus = useSelector((state)=>state.license.status);
  return (
    <div className="App">
      <h3>Пользовательское соглашение</h3>
      <p>lorem  ipsum</p>
      <input id='check' type='checkbox' onClick={() => dispatch(changeStatus())}/>
      <label htmlFor='check'>Прочитал</label>
      <br/>
      <button disabled={checkboxStatus}>Принять</button>
    </div>
  );
}

export default App;
