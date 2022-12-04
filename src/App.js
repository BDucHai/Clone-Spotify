import { useState } from 'react';
import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import NavBar from './components/NavBar';
import Playing from './components/Playing';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) =>{
    const song = DataSongs.find(song => song.id === idSong);
    if(!song){
      setSong(DataSongs[0])
    }
    else{
      setSong(song);
    }
  }
  return (
    <div className="relative bg-black App">
      <Songs.Provider value ={{DataSongs,song,handleSetSong}}>
        <NavBar/>
        <div className='grid grid-cols-3 overflow-hidden h-screen-navbar'>
          <DetailSong/>
          <ListSong />
      </div>
      <Playing className="fixed bottom-0"/>
      </Songs.Provider>
    </div>
  );
}

export default App;
