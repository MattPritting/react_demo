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
      <h1>Matt Pritting - z69n753</h1>
      <MyCounter incBy={1} />
      <hr></hr>
      <MyCounter incBy={2} decBy={3}/>
      <hr></hr>
      <MyGitHub />
    </div>
  );
}

//forever start -c "npm start" react_demo/

//OR

//tmux
//npm start

export default App;
