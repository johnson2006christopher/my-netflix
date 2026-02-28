'use client';

import { X, Star, Clock, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Movie } from '@/data/mockData';

interface MovieModalProps {
  movie: Movie | null;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!movie) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/95 backdrop-blur-xl">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-5xl">
        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* Demo Video - Using a placeholder since we don't have real video URLs */}
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            poster={movie.poster}
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>

          {/* Video Controls Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-zinc-700 rounded-full mb-4 cursor-pointer">
              <div 
                className="h-full bg-violet-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center hover:bg-violet-500 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-white ml-1" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 text-white hover:text-violet-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>

              <button className="p-2 text-white hover:text-violet-400 transition-colors">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="mt-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
              <div className="flex items-center gap-4 text-zinc-400">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {movie.rating}
                </span>
                <span>{movie.year}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {movie.duration}
                </span>
                <span className="px-2 py-0.5 bg-violet-600/20 text-violet-400 text-sm rounded">
                  {movie.genre}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-zinc-400 leading-relaxed">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
