import trendingIcon from './assets/activity.svg';
import './App.css';
import Card from './components/Card.js';
import { data } from './Data';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p className='Heading'>
          <img src={trendingIcon} alt='trending assets icon' />
          Trending Assets
        </p>
        <div className='Card-Container'>
          {
            data.map(item => {
              return (
                <Card item={item} />
              )
            }
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
