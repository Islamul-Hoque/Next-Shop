import { NextResponse } from 'next/server'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

export function proxy(request) {
    // const { user } = useContext(AuthContext)
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: '/abc/:path*',
    // matcher: ['/add-product/:path*', '/manage-products/:path*'],
}

