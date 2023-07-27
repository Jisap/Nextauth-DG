import type { NextAuthOptions} from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [ // http://localhost:3000/api/auth/providers -> devolverá objetos con:
    
       GitHubProvider({                                             // signinUrl: "http://localhost:3000/api/auth/signin/github"
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
       }),
       CredentialsProvider({                                        // signinUrl: "http://localhost:3000/api/auth/signin/credentials"
            name: "Credentials",
            credentials: {
                username:{
                    label: "Username:",
                    type: "text",
                    placeholder: "Your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your password"
                }
            },
            async authorize(credentials){
                // This is where you need to retrieve user data to verify with credentials
                const user = {id: "42", name: "Dave", password: "nextauth"}

                if( credentials?.username === user.name && credentials?.password === user.password ){
                    return user
                } else {
                  return null  
                }

            }
    })
    
    ],
   
}

