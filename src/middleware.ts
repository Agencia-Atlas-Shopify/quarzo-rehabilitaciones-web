import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''

  // Redirigir de quarzorehabilitaciones.es a www.quarzorehabilitaciones.es
  if (host === 'quarzorehabilitaciones.es') {
    const url = request.nextUrl.clone()
    url.host = 'www.quarzorehabilitaciones.es'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
