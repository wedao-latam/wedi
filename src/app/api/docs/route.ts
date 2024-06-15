import { swaggerSpec, swaggerUi } from '@/lib/swagger';
import { NextResponse } from 'next/server';

export async function GET() {
  const swaggerHtml = swaggerUi.generateHTML(swaggerSpec);

  return new NextResponse(swaggerHtml, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

// export async function GET_JSON() {
//   return NextResponse.json(swaggerSpec);
// }
