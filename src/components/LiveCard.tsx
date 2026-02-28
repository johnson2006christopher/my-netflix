'use client';

import { Users, Radio } from 'lucide-react';
import { LiveStream } from '@/data/mockData';

interface LiveCardProps {
  stream: LiveStream;
}

export default function LiveCard({ stream }: LiveCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-80 bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 cursor-pointer hover:scale-105 hover:z-10">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Live Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded-md animate-pulse">
          <Radio className="w-3 h-3" />
          LIVE
        </div>

        {/* Viewer Count */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-zinc-950/90 text-white text-xs font-medium rounded-md backdrop-blur-sm">
          <Users className="w-3 h-3" />
          {stream.viewerCount}
        </div>

        {/* Platform Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-zinc-800/90 text-zinc-300 text-xs font-medium rounded-md backdrop-blur-sm">
          {stream.platform}
        </div>

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white line-clamp-2 mb-2 leading-snug group-hover:text-red-400 transition-colors">
          {stream.title}
        </h3>
        
        <p className="text-xs text-zinc-500">{stream.channelName}</p>
      </div>
    </div>
  );
}
