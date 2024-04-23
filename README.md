# [nickoates.com](https://nickoates.com)

![Screenshot of nickoates.com](https://repository-images.githubusercontent.com/622056687/77b6322b-5d3d-4bc2-bf35-18f2ba1c809a)

This is my website, blog, and portfolio. I designed and built it myself using Next.js, Tailwind CSS, TypeScript, and MDX. For more information on the tech stack, see [my initial blog post](https://nickoates.com/blog/rebuilding-my-website). Parts of the design were inspired by [Lee Robinson's website](https://leerob.io) and [Apple's newsroom](https://www.apple.com/newsroom).

## Setting up newsletter subscriptions

I use [Resend](https://resend.com) to manage my newsletter. To setup your own newsletter, create a Resend account (if you haven't already), then add an audience for your newsletter. Generate an API key with full access to your account, and add both the key and audience ID to your `.env.local` file:

```bash
RESEND_API_KEY=re_yourApiKey
RESEND_AUDIENCE_ID=your-audience-id
```
