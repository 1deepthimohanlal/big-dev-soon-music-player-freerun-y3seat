import React,{useState} from 'react'
import Background from './components/background';
import Circle from './components/circle';
import Details from './components/details';
import songs from './songs';
import Player from './components/player';
import Footer from './components/footer';
function App()
{
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const nextSong = () => {
    if(currentIndex + 1 < songs.length){
      setCurrentIndex(currentIndex + 1)
      setCurrentSong(songs[currentIndex + 1])
    }
  }

  const prevSong = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
      setCurrentSong(songs[currentIndex - 1])
    }
  }

    return(
        <div>
        <div className='container'>
        <Background />
        <Circle />
        <Details 
            title = {currentSong.title}
            author = {currentSong.artist}  
        />
        <Player 
        currentSong={currentSong}
        currentIndex={currentIndex}
        nextSong={nextSong}
        prevSong={prevSong}
        />
        </div>
        <Footer />
        </div>
        
    );
}

export default App;