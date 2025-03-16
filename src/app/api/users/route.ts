import { NextResponse } from 'next/server';
import type { UserProfile, ApiResponse } from '@/types/api';

// Mock data - Replace with your actual database logic
const mockUsers: UserProfile[] = [
  {
    id: '1',
    username: 'john_doe',
    name: 'John Doe',
    bio: 'Professional developer',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    stats: {
      wins: 10,
      losses: 5,
      rating: 1500,
    },
  },
];

export async function GET(request: Request) {
  try {
    // Add query parameter handling
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (username) {
      const user = mockUsers.find((u) => u.username === username);
      if (!user) {
        return NextResponse.json<ApiResponse<null>>({
          success: false,
          error: 'User not found',
        }, { status: 404 });
      }
      return NextResponse.json<ApiResponse<UserProfile>>({
        success: true,
        data: user,
      });
    }

    return NextResponse.json<ApiResponse<UserProfile[]>>({
      success: true,
      data: mockUsers,
    });
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Internal server error',
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, name, bio } = body;

    if (!username || !name) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Username and name are required',
      }, { status: 400 });
    }

    // Check if user already exists
    if (mockUsers.some((u) => u.username === username)) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Username already exists',
      }, { status: 409 });
    }

    const newUser: UserProfile = {
      id: (mockUsers.length + 1).toString(),
      username,
      name,
      bio: bio || '',
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
      stats: {
        wins: 0,
        losses: 0,
        rating: 1200, // Starting rating
      },
    };

    mockUsers.push(newUser);

    return NextResponse.json<ApiResponse<UserProfile>>({
      success: true,
      data: newUser,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Internal server error',
    }, { status: 500 });
  }
} 