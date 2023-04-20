import logo from './logo.svg';
import './App.css';

function App() {
  
  setTimeout(function() {
    let h =document.getElementById("Time");
    setTimeout(function() {h.innerHTML="9"
      setTimeout(function() {h.innerHTML="8"
      setTimeout(function() {h.innerHTML="7"
      setTimeout(function() {h.innerHTML="6"
      setTimeout(function() {h.innerHTML="5"
      setTimeout(function() {h.innerHTML="4"
      setTimeout(function() {h.innerHTML="3"
      setTimeout(function() {h.innerHTML="2"
      setTimeout(function() {h.innerHTML="1"
      setTimeout(function() {h.innerHTML="Happy Independence Day"
      }, 1000);
      }, 1000);
      }, 1000);
      }, 1000);
      }, 1000);
      }, 1000);
      }, 1000);
      }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  return (
    <div className="">
      <h1 id='Time'>10</h1>
    </div>
  );
}

export default App;
