export interface Profile {
  id: string;
  name: string;
  age: number;
  bio: string;
  imageUrl: string;
  interests: string[];
  location: string;
  likes: number;
  battles: number;
  wins: number;
  instagram?: string;
  college: string;
  rank?: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  profile?: Profile;
} 