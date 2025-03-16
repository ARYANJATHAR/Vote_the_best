import { NextResponse } from 'next/server';
import type { BattleResult, ApiResponse } from '@/types/api';

// Mock data - Replace with your actual database logic
const mockBattles: BattleResult[] = [];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (userId) {
      const userBattles = mockBattles.filter(
        (battle) => battle.winner === userId || battle.loser === userId
      );
      return NextResponse.json<ApiResponse<BattleResult[]>>({
        success: true,
        data: userBattles,
      });
    }

    return NextResponse.json<ApiResponse<BattleResult[]>>({
      success: true,
      data: mockBattles,
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
    const { player1Id, player2Id, winner, score } = body;

    if (!player1Id || !player2Id || !winner || !score) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Missing required fields',
      }, { status: 400 });
    }

    if (winner !== player1Id && winner !== player2Id) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Invalid winner',
      }, { status: 400 });
    }

    const newBattle: BattleResult = {
      id: (mockBattles.length + 1).toString(),
      winner: winner,
      loser: winner === player1Id ? player2Id : player1Id,
      timestamp: new Date().toISOString(),
      score: {
        winner: score.winner,
        loser: score.loser,
      },
    };

    mockBattles.push(newBattle);

    return NextResponse.json<ApiResponse<BattleResult>>({
      success: true,
      data: newBattle,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Internal server error',
    }, { status: 500 });
  }
} 