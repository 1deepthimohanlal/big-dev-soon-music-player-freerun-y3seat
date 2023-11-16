import AudioPlayer from 'react-h5-audio-player';
import AudioSpectrum from 'react-audio-spectrum';
import React,{useState,useRef,useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBackward, faForward, faPause, faPlay} from '@fortawesome/free-solid-svg-icons'


function Player({
    currentSong,
    currentIndex,
    nextSong,
    prevSong
}){
    const [isPlaying, setIsplaying] = useState(false);
    const audioRef = useRef(null);
    const togglePlay = () => {
        setIsplaying(!isPlaying)
    }
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])



    return(

            <div className='player-audio'>
                <audio
                ref={audioRef}
                id='audio-element'
                src={currentSong.src}
            >
            </audio>
            <div className='audio-waveform'>
                    <AudioSpectrum
                        id="audio-canvas"
                        height={70}
                        width={500}
                        audioId={'audio-element'}
                        capColor={'gray'}
                        capHeight={2}
                        meterWidth={50}
                        meterCount={300}
                        meterColor={[
                            { stop: 1, color: '#ff9800' }
                        ]}
                        gap={8}
                    />
                </div>
                <div className='controls'>
                <button className='icons'>
             <FontAwesomeIcon 
                icon = {faBackward}
                onClick={prevSong} />
             </button>
             {isPlaying ? (
                <button className='icons'>
                    <FontAwesomeIcon icon = {faPause}  onClick={togglePlay}/>
                        </button>
                
                    ) : (
                        <button className='icons'><FontAwesomeIcon icon = {faPlay} 
                            onClick={togglePlay}
                        /> </button>
                        
                    )}
                    <button className='icons'>
                 <FontAwesomeIcon icon = {faForward}
                 onClick={nextSong} 

                 />
                    </button>
                
                </div>

            </div>



        // <div>
        //     <AudioPlayer
        //      src={song.src}
        //     className='player-audio'
        //     layout="stacked-reverse"
        //     customAdditionalControls={[]}
        //     showPlayControl={false}
        //     onPlay={() =>
        //         console.log('playing')}
        //     // onClickNext={() => setCurrentSong(i => i + 1)}
        //   />
        // </div>
    );
    }


export default Player;