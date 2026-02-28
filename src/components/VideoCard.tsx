'use client';

import { Play, Clock, Eye } from 'lucide-react';
import { Video } from '@/data/mockData';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-72 bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 cursor-pointer hover:scale-105 hover:z-10">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-zinc-950/90 text-white text-xs font-medium rounded-md backdrop-blur-sm">
          {video.duration}
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-white text-white ml-1" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2 leading-snug group-hover:text-violet-400 transition-colors">
          {video.title}
        </h3>
        
        <p className="text-xs text-zinc-500 mb-3">{video.channelName}</p>
        
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {video.views}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {video.uploadedAt}
          </span>
        </div>
      </div>
    </div>
  );
}
