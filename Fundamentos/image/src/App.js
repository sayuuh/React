import Logo from './assets/logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Pasta Public - não serão mais alteradas */} 
      <img src="/favicon.ico" alt="" />

      {/* Pasta Src - podem ser alteradas */}
      <img src={Logo} alt="" />

      {/* LINK  */}
      <img src="https://c4.wallpaperflare.com/wallpaper/966/672/835/city-cityscape-rio-de-janeiro-brazil-wallpaper-preview.jpg" alt="" />
    </div>
  );
}

export default App;
