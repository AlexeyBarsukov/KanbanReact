import './App.css';
import ChangeName from './components/ChangeName';
import PopUp from './components/PopUp';
import Card1 from './components/Cards/Card1';
import Card2 from './components/Cards/Card2';
import Card3 from './components/Cards/Card3';
import Card4 from './components/Cards/Card4';


function App() {
  return (
    <>
      <PopUp />
      <ChangeName />
      <div className="Cards">
        <div><Card1 /></div>
        <div><Card2 /></div>
        <div><Card3 /></div>
        <div><Card4 /></div>
      </div>
    </>
  );
}

export default App;
