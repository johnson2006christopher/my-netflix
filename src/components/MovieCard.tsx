'use client';

import { Star, Clock } from 'lucide-react';
import { Movie } from '@/data/mockData';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  return (
    <div 
      onClick={() => onClick(movie)}
      className="group relative flex-shrink-0 w-48 bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-violet-500/50 hover:bg-zinc-900 transition-all duration-300 cursor-pointer hover:scale-105 hover:z-10"
    >
      {/* Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-zinc-950/90 text-amber-400 text-xs font-bold rounded-md backdrop-blur-sm">
          <Star className="w-3 h-3 fill-amber-400" />
          {movie.rating}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white line-clamp-1 mb-1 group-hover:text-violet-400 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span>{movie.year}</span>
          <span className="w-1 h-1 bg-zinc-600 rounded-full" />
          <span className="flex items-center gap-0.5">
            <Clock className="w-3 h-3" />
            {movie.duration}
          </span>
        </div>
        
        <p className="text-xs text-violet-400 mt-1">{movie.genre}</p>
      </div>
    </div>
  );
}
