export interface Video {
  id: string;
  title: string;
  channelName: string;
  thumbnail: string;
  views: string;
  uploadedAt: string;
  duration: string;
}

export interface LiveStream {
  id: string;
  title: string;
  channelName: string;
  thumbnail: string;
  viewerCount: string;
  platform: 'YouTube' | 'Twitch';
  isLive: boolean;
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  year: number;
  genre: string;
  rating: string;
  duration: string;
  description: string;
  videoUrl?: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  duration: string;
}

export interface Playlist {
  id: string;
  name: string;
  cover: string;
  trackCount: number;
}

// Mock Data for YouTube VODs
export const youtubeVods: Video[] = [
  {
    id: '1',
    title: 'Building a Modern Web App with Next.js 14',
    channelName: 'CodeMaster Pro',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&h=360&fit=crop',
    views: '1.2M views',
    uploadedAt: '2 days ago',
    duration: '45:32',
  },
  {
    id: '2',
    title: 'The Future of AI in Software Development',
    channelName: 'Tech Insights',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop',
    views: '892K views',
    uploadedAt: '5 days ago',
    duration: '1:12:45',
  },
  {
    id: '3',
    title: 'Rust Programming - Complete Beginners Guide',
    channelName: 'Systems Lab',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=640&h=360&fit=crop',
    views: '2.4M views',
    uploadedAt: '1 week ago',
    duration: '2:30:15',
  },
  {
    id: '4',
    title: 'CSS Grid vs Flexbox - When to Use What',
    channelName: 'Web Dev Simplified',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=360&fit=crop',
    views: '567K views',
    uploadedAt: '3 days ago',
    duration: '18:22',
  },
  {
    id: '5',
    title: 'Deploying to Vercel - Full Tutorial',
    channelName: 'CloudCrafter',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=640&h=360&fit=crop',
    views: '345K views',
    uploadedAt: '4 days ago',
    duration: '28:10',
  },
  {
    id: '6',
    title: 'Building a REST API with Node.js',
    channelName: 'Backend Masters',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=640&h=360&fit=crop',
    views: '1.8M views',
    uploadedAt: '2 weeks ago',
    duration: '1:05:30',
  },
  {
    id: '7',
    title: 'TypeScript Advanced Patterns',
    channelName: 'TypeSafe Code',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=640&h=360&fit=crop',
    views: '723K views',
    uploadedAt: '6 days ago',
    duration: '52:18',
  },
  {
    id: '8',
    title: 'Docker Compose for Development',
    channelName: 'DevOps Daily',
    thumbnail: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=640&h=360&fit=crop',
    views: '456K views',
    uploadedAt: '1 week ago',
    duration: '35:45',
  },
];

// Mock Data for Live Streams
export const liveStreams: LiveStream[] = [
  {
    id: '1',
    title: 'Live Coding: Building an AI Agent',
    channelName: 'DevStream',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&h=360&fit=crop',
    viewerCount: '12.5K',
    platform: 'Twitch',
    isLive: true,
  },
  {
    id: '2',
    title: 'Live: Retro Game Tournament',
    channelName: 'RetroGaming Hub',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=640&h=360&fit=crop',
    viewerCount: '8.2K',
    platform: 'YouTube',
    isLive: true,
  },
  {
    id: '3',
    title: 'Building a Startup - Live Q&A',
    channelName: 'Founder Stories',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=640&h=360&fit=crop',
    viewerCount: '5.7K',
    platform: 'YouTube',
    isLive: true,
  },
  {
    id: '4',
    title: 'Live Music Production Session',
    channelName: 'BeatMaker TV',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=640&h=360&fit=crop',
    viewerCount: '3.1K',
    platform: 'Twitch',
    isLive: true,
  },
  {
    id: '5',
    title: 'Competitive Programming Practice',
    channelName: 'CodeForces Live',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=640&h=360&fit=crop',
    viewerCount: '2.8K',
    platform: 'YouTube',
    isLive: true,
  },
  {
    id: '6',
    title: 'Live Debugging Session',
    channelName: 'BugHunter',
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=640&h=360&fit=crop',
    viewerCount: '1.9K',
    platform: 'Twitch',
    isLive: true,
  },
];

// Mock Data for Movies
export const movies: Movie[] = [
  {
    id: '1',
    title: 'Interstellar',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
    year: 2014,
    genre: 'Sci-Fi',
    rating: '8.7',
    duration: '2h 49m',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
  },
  {
    id: '2',
    title: 'Inception',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
    year: 2010,
    genre: 'Action',
    rating: '8.8',
    duration: '2h 28m',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop',
    year: 2008,
    genre: 'Action',
    rating: '9.0',
    duration: '2h 32m',
    description: 'When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological tests.',
  },
  {
    id: '4',
    title: 'Blade Runner 2049',
    poster: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&h=600&fit=crop',
    year: 2017,
    genre: 'Sci-Fi',
    rating: '8.0',
    duration: '2h 44m',
    description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.',
  },
  {
    id: '5',
    title: 'Dune',
    poster: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop',
    year: 2021,
    genre: 'Sci-Fi',
    rating: '8.0',
    duration: '2h 35m',
    description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset.',
  },
  {
    id: '6',
    title: 'The Matrix',
    poster: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop',
    year: 1999,
    genre: 'Sci-Fi',
    rating: '8.7',
    duration: '2h 16m',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  },
  {
    id: '7',
    title: 'Mad Max: Fury Road',
    poster: 'https://images.unsplash.com/photo-1568876694728-451bbfbc17a4?w=400&h=600&fit=crop',
    year: 2015,
    genre: 'Action',
    rating: '8.1',
    duration: '2h',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.',
  },
  {
    id: '8',
    title: 'Arrival',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
    year: 2016,
    genre: 'Sci-Fi',
    rating: '7.9',
    duration: '1h 56m',
    description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
  },
];

// Mock Data for Music
export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Chill Vibes',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    trackCount: 24,
  },
  {
    id: '2',
    name: 'Workout Mix',
    cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop',
    trackCount: 18,
  },
  {
    id: '3',
    name: 'Late Night Coding',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop',
    trackCount: 32,
  },
  {
    id: '4',
    name: 'Focus Flow',
    cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
    trackCount: 45,
  },
  {
    id: '5',
    name: 'Electronic Dreams',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    trackCount: 28,
  },
  {
    id: '6',
    name: 'Acoustic Sessions',
    cover: 'https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=300&h=300&fit=crop',
    trackCount: 21,
  },
];

export const musicTracks: MusicTrack[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Wave',
    album: 'Nocturnal',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop',
    duration: '3:45',
  },
  {
    id: '2',
    title: 'Electric Soul',
    artist: 'Neon Pulse',
    album: 'Digital Hearts',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
    duration: '4:12',
  },
  {
    id: '3',
    title: 'Starlight',
    artist: 'Cosmic Drift',
    album: 'Galaxy',
    cover: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=300&fit=crop',
    duration: '3:28',
  },
  {
    id: '4',
    title: 'Ocean Breeze',
    artist: 'Tidal',
    album: 'Waves',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    duration: '4:55',
  },
  {
    id: '5',
    title: 'City Lights',
    artist: 'Urban Echo',
    album: 'Metropolis',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    duration: '3:18',
  },
];

// Hero Featured Content
export const featuredContent = {
  title: 'Building the Future',
  subtitle: 'Live Now',
  description: 'Join us for an exclusive live coding session where we build a complete SaaS application from scratch.',
  thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=1080&fit=crop',
  channelName: 'DevStream',
  viewerCount: '12.5K watching',
};
