import { NextResponse } from 'next/server'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

export function proxy(request) {
    // const { user } = useContext(AuthContext)
    // return NextResponse.redirect(new URL('/login', request.url))
     return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: '/about/:path*',
    // matcher: ['/add-product/:path*', '/manage-products/:path*'],
}
