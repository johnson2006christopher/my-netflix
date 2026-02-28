'use client';

import { Play, Clock, Heart } from 'lucide-react';
import { playlists, musicTracks } from '@/data/mockData';

export default function MusicLounge() {
  return (
    <section className="py-8">
      {/* Featured Playlists */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative bg-zinc-900/50 rounded-xl p-4 border border-zinc-800/50 hover:border-violet-500/50 hover:bg-zinc-900 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={playlist.cover}
                  alt={playlist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 fill-white text-white ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white truncate mb-1 group-hover:text-violet-400 transition-colors">
                {playlist.name}
              </h3>
              <p className="text-xs text-zinc-500">{playlist.trackCount} tracks</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Played */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
        <div className="bg-zinc-900/30 rounded-2xl border border-zinc-800/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800/50">
                <th className="text-left py-4 px-6 text-xs font-medium text-zinc-500 uppercase tracking-wider w-12">#</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-zinc-500 uppercase tracking-wider">Title</th>
                <th className="text-left py-4 px-6 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden md:table-cell">Album</th>
                <th className="text-right py-4 px-6 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  <Clock className="w-4 h-4 inline" />
                </th>
              </tr>
            </thead>
            <tbody>
              {musicTracks.map((track, index) => (
                <tr
                  key={track.id}
                  className="group hover:bg-zinc-800/30 transition-colors cursor-pointer border-b border-zinc-800/30 last:border-0"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zinc-500 group-hover:hidden">{index + 1}</span>
                      <button className="hidden group-hover:block p-1">
                        <Play className="w-4 h-4 fill-white text-white" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-white group-hover:text-violet-400 transition-colors">
                          {track.title}
                        </p>
                        <p className="text-xs text-zinc-500">{track.artist}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 hidden md:table-cell">
                    <span className="text-sm text-zinc-400">{track.album}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-3">
                      <button className="p-1 opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-red-500 transition-all">
                        <Heart className="w-4 h-4" />
                      </button>
                      <span className="text-sm text-zinc-500">{track.duration}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
