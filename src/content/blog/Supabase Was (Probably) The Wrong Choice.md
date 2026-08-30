---
author: Matt Roumaya
title: Supabase Was (Probably) The Wrong Choice
date: 08-30-2026
categories: self-hosting, hetzner, cloudflare, next.js, dokploy, postgres, database
---

I've been refocusing on phillymetal and considering the best way to set up a reliable, fast, and efficient architecture. When I first created the site, with very VERY limited knowledge of web architecture, I actually set up my backend with Google Sheets using the Google Drive API because I had less than 100 rows of data. This was cool and a really good way to understand how to send data from one source to my React app. 

Shortly after, I switched over to Supabase which offers a free tier, and this has actually served me quite well over the years, especially considering I haven't spent a single dollar. In my last blog post, I hooked up an edge function that sends me a mobile notification whenever someone submits a show which is amazing and I'm very happy with. However, recently Supabase had a big latency issue that [lasted somewhere between 9 and 20 hours](https://www.reddit.com/r/webdev/comments/1w0ntcc/no_update_to_supabase_outage_since_9_hours_ago/). 

This had me thinking that given the really minimal requirements of phillymetal, I can probably set up a more resilient and intentional backend. My longterm goal is to have an archive of heavy shows in Philly for as long as I maintain the site, so my tables will continue to grow. Eventually I will grow out of the free tier limit and would need to opt-in to the $25/month plan, or find another solution. 

I'm choosing to find another solution now, mostly because I've been blogging more and being more intentional about all of my little hobby projects. I also have been spending more time focusing on smart architecture, and eventually would love to fully self-host all of my projects, but I am not ready to commit to that fully quite yet. 

### What's Next?

I did some evaluation/research, and am going to give a Hetzner VPS + self-managed postgres a try. 
- This should come in around $5/month, with the option of having multiple databases/servers, which will give me more flexibility for other projects. 
- Besides adding shows, phillymetal is mostly just a single table read operation, which a simple postgres install should be fully capable of. I'm actually hoping for even less latency, and plan to look into a caching option for the main page + the archive.
- I'm not a fan of AWS, Azure, or Google because of their pricing plans. Hetzner is very predictable and offers a lot of very low-cost options, and I do not need a lot of compute at all.

## Also in the Works
- I started a photoblog for my wife Molly, using a [Hetzner](https://www.hetzner.com/) VPS, Next.js, [Dokploy](https://dokploy.com/), and [Cloudflare's R2](https://www.cloudflare.com/products/r2/). I'll be blogging about this soon, probably in a series of posts about things I've learned about self-hosting. 
- So far I've spent about 5 hours building this out, and have definitely learned some new Linux + ssh concepts that I can use to get my postgres db up and running.