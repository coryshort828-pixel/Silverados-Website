# 🎸 Silverados WNC - Deployment Guide

This website is a high-performance React application. Because it uses the **Gemini AI API**, it cannot be hosted as a simple "static" site (like a basic GoDaddy upload). It needs a service that handles "Build Processes."

## 🚀 How to see these changes at silveradoswnc.com

### Step 1: Update your GitHub Repository
1. Open your repository on GitHub.
2. Replace the existing files with the code provided in this project.
3. **Important**: Ensure `package.json`, `vite.config.ts`, and the `src` files are all present.

### Step 2: Connect to Netlify (Free & Recommended)
Since you already have a GitHub repo, this is the easiest way:
1. Go to [Netlify.com](https://www.netlify.com) and sign in with GitHub.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your Silverados GitHub repository.
4. **Site Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. **Environment Variables (CRITICAL)**:
   - Go to **Site Settings > Environment variables**.
   - Add a variable named `API_KEY`.
   - Paste your Google Gemini API Key here.

### Step 3: Point GoDaddy to the new site
1. In Netlify, go to **Domain Settings**.
2. Click **"Add custom domain"** and enter `silveradoswnc.com`.
3. Netlify will give you 4 "Nameservers" (e.g., `dns1.p01.nsone.net`).
4. Log into your **GoDaddy Control Panel**.
5. Find your domain > **Manage DNS** > **Nameservers**.
6. Change them to the ones Netlify gave you.

**Note**: Once you update GoDaddy, it can take anywhere from 1 to 24 hours for the new site to show up for everyone (this is called DNS Propagation).

---
*Created for Silverados WNC - Black Mountain, NC*