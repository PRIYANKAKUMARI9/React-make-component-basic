
import './App.css';
import Footerss from './Footerss';
import Header from './Header';




function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Footerss></Footerss>
      <hello></hello>
    </div>
  );
}

export default App;

function hello(){
  return(
    <>
    <p>this is used in main App.js without export default</p>
    </>
  )
}
