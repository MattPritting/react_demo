//import logo from '../logo.svg';
import MyCounter from './MyCounter';
import MyGitHub from './MyGitHub';

function App() {
  //From HTML below, use for picture
  //<header className="App-header">
  //<img src={logo} className="App-logo" alt="logo" />
  //</header>

  return (
    <div className="App">
      <MyCounter incBy={1} />
      <hr></hr>
      <MyCounter incBy={2} decBy={3}/>
      <hr></hr>
      <MyGitHub />
    </div>
  );
}

//forever start -c "npm start" react_demo/

export default App;
