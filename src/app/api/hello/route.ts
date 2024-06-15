// src/app/api/hello/route.ts
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns a hello world message
 *     responses:
 *       200:
 *         description: Hello world message
 */
export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}