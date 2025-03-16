export interface UserProfile {
  id: string;
  username: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
  stats: {
    wins: number;
    losses: number;
    rating: number;
  };
}

export interface BattleResult {
  id: string;
  winner: string;
  loser: string;
  timestamp: string;
  score: {
    winner: number;
    loser: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
} 