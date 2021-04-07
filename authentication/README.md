This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Authentication

```
Client --request--> Server
Server --return (page)--> Client
Client --request (token)--> Firebase (firebase/app, firebase/auth)
Firebase --return (token)--> Client
Client --use (token)--> Server
Server --verify (token)--> Firebase (firebase/admin)
Server --return (data)--> Client
```
## Authentication on SSR
Client send token to the server, server verify and get user info and send it back to client.

```
Client --send (token)--> server
Server --verify (token)--> Firebase
Server --send html page with user info--> Client
```

## Authentication on Client
Client get user info from Firebase (no need go to the server)

Props:

 - First Byte is fast

Cons:

 - Server doesn't know is user login or not

```
Client --send (token optional)--> server
Server --Send html page--> Client
Client --Get user info--> Firebase
```

https://nextjs.org/docs/authentication#authentication-patterns


## Functions

- Get user info
- Update user info
- Upload image