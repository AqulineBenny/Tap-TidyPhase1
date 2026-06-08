import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Public routes
  const publicRoutes = ['/', '/login', '/register', '/api/auth/login', '/api/auth/register', '/logo.png'];
  
  // Check public routes
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  
  // Check for image files
  if (pathname.match(/\.(png|jpg|jpeg|gif|svg|ico)$/)) {
    return NextResponse.next();
  }

  // ✅ FIX: Access cookies properly
  const cookieStore = request.cookies;
  const token = cookieStore.get('token')?.value;

  if (!token) {
    if (!pathname.startsWith('/api')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.userId);
    requestHeaders.set('x-user-role', decoded.role);

    return NextResponse.next({
      request: { headers: requestHeaders }
    });
  } catch (error) {
    if (!pathname.startsWith('/api')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};