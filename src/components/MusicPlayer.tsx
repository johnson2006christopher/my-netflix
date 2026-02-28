'use client';

import { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Heart,
  Repeat,
  Shuffle,
  ListMusic,
  Disc3
} from 'lucide-react';
import { musicTracks } from '@/data/mockData';

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const currentTrack = musicTracks[currentTrackIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress(prev => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : musicTracks.length - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev < musicTracks.length - 1 ? prev + 1 : 0));
    setProgress(0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Player Container */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 z-50">
        <div className="h-full px-6 flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center gap-4 w-72">
            <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-black/20 flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
                <Disc3 className={`w-6 h-6 text-white ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
              </div>
            </div>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">{currentTrack.title}</h4>
              <p className="text-xs text-zinc-500 truncate">{currentTrack.artist}</p>
            </div>
            <button className="p-2 text-zinc-500 hover:text-red-500 transition-colors">
              <Heart className="w-4 h-4" />
            </button>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
            <div className="flex items-center gap-4">
              <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                <Shuffle className="w-4 h-4" />
              </button>
              <button 
                onClick={handlePrevious}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              <button
                onClick={handlePlayPause}
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-black" />
                ) : (
                  <Play className="w-5 h-5 fill-black ml-1" />
                )}
              </button>
              <button 
                onClick={handleNext}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
              >
                <SkipForward className="w-5 h-5" />
              </button>
              <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                <Repeat className="w-4 h-4" />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full flex items-center gap-3">
              <span className="text-xs text-zinc-500 w-10 text-right">
                {formatTime((progress / 100) * 210)}
              </span>
              <div className="flex-1 h-1 bg-zinc-700 rounded-full cursor-pointer group">
                <div 
                  className="h-full bg-white rounded-full relative group-hover:bg-violet-500 transition-colors"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-xs text-zinc-500 w-10">
                {formatTime(210)}
              </span>
            </div>
          </div>

          {/* Volume & Playlist */}
          <div className="flex items-center gap-4 w-72 justify-end">
            <button 
              onClick={() => setShowPlaylist(!showPlaylist)}
              className={`p-2 transition-colors ${showPlaylist ? 'text-violet-400' : 'text-zinc-500 hover:text-white'}`}
            >
              <ListMusic className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleMute}
                className="p-2 text-zinc-500 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div className="w-24 h-1 bg-zinc-700 rounded-full cursor-pointer">
                <div 
                  className="h-full bg-zinc-400 rounded-full"
                  style={{ width: isMuted ? '0%' : '70%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator Line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-zinc-800">
          <div 
            className="h-full bg-violet-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Playlist Panel */}
      {showPlaylist && (
        <div className="fixed bottom-24 right-8 w-80 max-h-96 bg-zinc-900/95 backdrop-blur-xl rounded-xl border border-zinc-800 overflow-hidden z-40">
          <div className="p-4 border-b border-zinc-800">
            <h3 className="text-sm font-semibold text-white">Queue</h3>
            <p className="text-xs text-zinc-500">{musicTracks.length} tracks</p>
          </div>
          <div className="overflow-y-auto max-h-72">
            {musicTracks.map((track, index) => (
              <button
                key={track.id}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsPlaying(true);
                }}
                className={`w-full flex items-center gap-3 p-3 hover:bg-zinc-800/50 transition-colors ${
                  index === currentTrackIndex ? 'bg-violet-600/20' : ''
                }`}
              >
                <span className="w-6 text-xs text-zinc-500">{index + 1}</span>
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="flex-1 text-left min-w-0">
                  <p className={`text-sm truncate ${index === currentTrackIndex ? 'text-violet-400' : 'text-white'}`}>
                    {track.title}
                  </p>
                  <p className="text-xs text-zinc-500 truncate">{track.artist}</p>
                </div>
                <span className="text-xs text-zinc-500">{track.duration}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
