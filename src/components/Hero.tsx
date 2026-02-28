'use client';

import { Play, Users, Radio } from 'lucide-react';
import { featuredContent } from '@/data/mockData';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredContent.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-2xl px-12 flex flex-col justify-center">
        {/* Live Badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-full animate-pulse">
            <Radio className="w-3 h-3" />
            {featuredContent.subtitle}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-full backdrop-blur-sm">
            <Users className="w-3 h-3" />
            {featuredContent.viewerCount}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          {featuredContent.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-xl">
          {featuredContent.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40 hover:scale-105">
            <Play className="w-5 h-5 fill-white" />
            Watch Now
          </button>
          <button className="flex items-center gap-2 px-6 py-3.5 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl backdrop-blur-sm transition-all duration-200 border border-zinc-700/50 hover:border-zinc-600">
            More Info
          </button>
        </div>

        {/* Channel Info */}
        <div className="flex items-center gap-3 mt-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {featuredContent.channelName.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm text-white font-medium">{featuredContent.channelName}</p>
            <p className="text-xs text-zinc-500">Live Channel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
