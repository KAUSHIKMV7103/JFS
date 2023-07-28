import React, { useState, useRef } from 'react';
import '../pages/music.css'; 

const songs = [
  {
    title: 'Idazhin Oram',
    artist: 'Anirudh',
    cover: '/3.jpg',
    source: "/Idhazhin-Oram.mp3",
  },
  {
    title: 'Senjitaley',
    artist: 'Anirudh',
    cover: '/remo-tamil-poster_146761035140.webp',
    source: '/Senjitaley.mp3',
  },
  {
    title: 'Song 3',
    artist: 'tuyrt',
    cover: '/Kurumugil-From-Sita-Ramam_co83bb.jpg',
    source: '/Kurumugil-MassTamilan.dev.mp3',
  },
  {
    title: 'Song 4',
    artist: 'tuyrt',
    cover: '/i.jpg',
    source: '/Ennodu-Nee-Irundhal.mp3',
  },
 
];

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
};

const AudioPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  const { title, artist, cover, source } = songs[currentSongIndex];

  return (
    <div className='aa'>
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={source}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNextSong} // Automatically play the next song when the current one ends
      ></audio>

      <div className="song-info">
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="song-title">{title}</div>
            <div className="song-artist">{artist}</div>
          </div>
        </div>
        <img src={cover} alt={title} />
      </div>

      <div className="controls">
        <button onClick={handlePrevSong}>Previous</button>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNextSong}>Next</button>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
        {/* Removed the volume slider */}
      </div>

      <div className="time-display">
        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
      </div>
    </div>
    </div>
    
  );
};

export default AudioPlayer;