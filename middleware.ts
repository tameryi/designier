import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.headers.get('x-middleware-subrequest')) {
    return new NextResponse('Bad Request', { status: 400 });
  }
  return NextResponse.next();
}

// Optional: restrict to specific routes
// export const config = { matcher: ['/api/:path*'] }
