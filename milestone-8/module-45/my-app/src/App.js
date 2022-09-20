import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Country ></Country>
      <Country ></Country>
      
     
    </div>
  );
}

function Country(props){
  
  return (
   <div className='person'>
     <h1>Indrajit chandra chandra </h1>
    <p>Profession: Student</p>
   </div>

  )
  
  
}

export default App;
