import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const auth: NextAuthOptions = {
    providers: [
        // Credentials({
        //     name: 'Credentials',
        //     type: 'credentials',

        // })
    ],
    secret: process.env.NEXTAUTH_SECRET || 'ASLJDNASUID',
}