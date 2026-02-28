'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import CarouselRow from '@/components/CarouselRow';
import VideoCard from '@/components/VideoCard';
import LiveCard from '@/components/LiveCard';
import MovieCard from '@/components/MovieCard';
import MovieModal from '@/components/MovieModal';
import MusicPlayer from '@/components/MusicPlayer';
import MusicLounge from '@/components/MusicLounge';
import { youtubeVods, liveStreams, movies, movies as allMovies } from '@/data/mockData';
import { Film, Tv, Music, Youtube, Settings as SettingsIcon, Sparkles } from 'lucide-react';
import { Movie } from '@/data/mockData';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <CarouselRow title="🔥 Trending Now">
              {youtubeVods.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </CarouselRow>
            <CarouselRow title="🔴 Live Now">
              {liveStreams.map((stream) => (
                <LiveCard key={stream.id} stream={stream} />
              ))}
            </CarouselRow>
            <CarouselRow title="🎬 New Releases">
              {youtubeVods.slice(4).map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </CarouselRow>
            <section className="py-8">
              <h2 className="text-2xl font-bold text-white mb-6">🎥 Movie Vault</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {movies.slice(0, 6).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
                ))}
              </div>
            </section>
          </>
        );

      case 'youtube':
        return (
          <>
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Youtube className="w-8 h-8 text-red-500" />
                YouTube Subscriptions
              </h1>
              <p className="text-zinc-400">Latest videos from your subscribed channels</p>
            </section>
            <CarouselRow title="From Your Subscriptions">
              {youtubeVods.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </CarouselRow>
            <CarouselRow title="Watch Later">
              {youtubeVods.reverse().map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </CarouselRow>
          </>
        );

      case 'live':
        return (
          <>
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Tv className="w-8 h-8 text-red-500" />
                Live TV Hub
              </h1>
              <p className="text-zinc-400">Watch live streams from YouTube and Twitch</p>
            </section>
            <CarouselRow title="🔴 Currently Live">
              {liveStreams.map((stream) => (
                <LiveCard key={stream.id} stream={stream} />
              ))}
            </CarouselRow>
            <CarouselRow title="Recommended Streams">
              {liveStreams.reverse().map((stream) => (
                <LiveCard key={stream.id} stream={stream} />
              ))}
            </CarouselRow>
          </>
        );

      case 'music':
        return (
          <>
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Music className="w-8 h-8 text-green-500" />
                Music Lounge
              </h1>
              <p className="text-zinc-400">Your personal music player with playlists</p>
            </section>
            <MusicLounge />
          </>
        );

      case 'movies':
        return (
          <>
            <section className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Film className="w-8 h-8 text-violet-500" />
                Movie Vault
              </h1>
              <p className="text-zinc-400">Your personal movie collection</p>
            </section>
            <section className="py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {allMovies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
                ))}
              </div>
            </section>
          </>
        );

      case 'settings':
        return (
          <section className="py-8">
            <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <SettingsIcon className="w-8 h-8" />
              Settings
            </h1>
            <div className="max-w-2xl space-y-6">
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
                <h2 className="text-xl font-semibold text-white mb-4">Account</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="text-zinc-400">Email</span>
                    <span className="text-white">user@omnistream.io</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="text-zinc-400">Plan</span>
                    <span className="text-violet-400 font-medium">Pro</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-zinc-400">Storage Used</span>
                    <span className="text-white">2.4 GB / 50 GB</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
                <h2 className="text-xl font-semibold text-white mb-4">Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="text-zinc-400">Auto-play Videos</span>
                    <button className="w-12 h-6 bg-violet-600 rounded-full relative">
                      <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-zinc-800">
                    <span className="text-zinc-400">Show Live Notifications</span>
                    <button className="w-12 h-6 bg-zinc-700 rounded-full relative">
                      <span className="absolute left-1 top-1 w-4 h-4 bg-zinc-500 rounded-full" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-zinc-400">High Quality Video</span>
                    <button className="w-12 h-6 bg-violet-600 rounded-full relative">
                      <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
                <h2 className="text-xl font-semibold text-white mb-4">About</h2>
                <div className="space-y-2 text-zinc-400">
                  <p>Version: 1.0.0</p>
                  <p>Built with Next.js & Tailwind CSS</p>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TopBar />
      
      <main 
        className="pl-72 pt-20 pb-28 px-8 transition-all duration-300"
        style={{ paddingLeft: sidebarCollapsed ? '5rem' : '18rem' }}
      >
        {/* Logo in main content for collapsed state indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">OmniStream</span>
          <span className="text-zinc-500">/</span>
          <span className="text-zinc-400 capitalize">{activeTab}</span>
        </div>

        {renderContent()}
      </main>

      <MusicPlayer />
      
      {selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
}
