import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"

const publicRoutes = [
  { path: '/', whenAuthenticated: 'next' },
  { path: '/login', whenAuthenticated: 'redirect' },
  { path: '/register', whenAuthenticated: 'redirect' },
  { path: '/pricing', whenAuthenticated: 'next' },
  { path: '/obras', whenAuthenticated: 'next' },
  { path: '/about', whenAuthenticated: 'next' },
  { path: '/equipe', whenAuthenticated: 'next' },
  { path: '/docs', whenAuthenticated: 'next' }
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('token')

    if (!authToken && publicRoute) {
      return NextResponse.next()
    }

    if (!authToken && !publicRoute) {
      const redirectUrl = request.nextUrl.clone()

      redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
      console.log(redirectUrl.href)
      return NextResponse.redirect(redirectUrl)
    }

    if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
      const redirectUrl = request.nextUrl.clone()

      redirectUrl.pathname = '/dashboard'

      return NextResponse.redirect(redirectUrl)
    }

    if (authToken && !publicRoute) {
      // Chegar se o JWT não está EXPIRADO
      // Se sim, remover o cookie e redirencionar o usuário para o login

      return NextResponse.next()
    }
    return NextResponse.next()
}

export const config: MiddlewareConfig = {
    matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.svg$|.*\\.png$|.*\\.jpg$).*)',
  ],
}