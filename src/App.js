import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import { useTelegram } from './hooks/useTelegram';
import Button from './components/button/Button';

function App() {

  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])


  return (
    <div className="App">
      {/* <Header /> */}
      <Button onClick={onToggleButton}>Toggle</Button>
    </div>
  );
}

export default App;
