# 🎸 Silverados WNC - Google Firebase Deployment

Since you want to host directly with **Google (Firebase)** and connect your **GoDaddy domain**, follow these exact steps.

## 🚀 Step 1: Prepare the Google Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add Project"** and name it `silverados-wnc`.
3. Once created, click on **"Hosting"** in the left sidebar and click **"Get Started"**.

## 🚀 Step 2: Connect GitHub to Firebase (Auto-Update)
The easiest way to keep your site updated is to link your GitHub to Firebase:
1. On your computer, install the Firebase tool: `npm install -g firebase-tools`.
2. Run `firebase login`.
3. Run `firebase init hosting`.
   - **Project**: Select "Use an existing project" and pick `silverados-wnc`.
   - **Public Directory**: Type `dist`.
   - **Single Page App**: Type `Yes`.
   - **GitHub Actions**: Type `Yes`.
4. This will create a "Secret" in your GitHub repo. You MUST add your `API_KEY` to your GitHub Secrets so the AI works:
   - Go to your GitHub Repo > Settings > Secrets and variables > Actions.
   - Add a "New repository secret" named `API_KEY` and paste your Gemini Key.

## 🚀 Step 3: Connect silveradoswnc.com (GoDaddy)
1. In the Firebase Console, under **Hosting**, click **"Add custom domain"**.
2. Enter `silveradoswnc.com`.
3. Firebase will give you a **TXT Record**. 
   - Log into **GoDaddy**.
   - Go to your Domain > **DNS Management**.
   - Add a new record: Type: `TXT`, Name: `@`, Value: (The code Firebase gave you).
4. Once verified, Firebase will give you two **A Records** (IP Addresses).
   - In GoDaddy DNS, delete any old `A` records for `@`.
   - Add two new `A` records: 
     - Type: `A`, Name: `@`, Value: (First IP from Firebase).
     - Type: `A`, Name: `@`, Value: (Second IP from Firebase).

## 🚀 Step 4: Deploying Changes
Every time you push your code to GitHub now, Google Firebase will automatically:
1. Build your code using Vite.
2. Inject your `API_KEY`.
3. Deploy the new design to `silveradoswnc.com`.

## 🖼️ Adding Band Logos (Blackwater Station, etc.)
To ensure the Blackwater Station logo appears correctly, your folder structure should look like this in your code editor:

```text
project-root/
├── public/
│   └── images/
│       └── blackwater-station-logo.png  <-- Put your image file here!
├── components/
├── index.html
├── constants.tsx
└── ...
```

**How to add the logo:**
1. Create a new folder named `public` at the very top level of your project.
2. Inside `public`, create a folder named `images`.
3. Drag and drop your band logo file into that `images` folder.
4. Rename the file to `blackwater-station-logo.png` exactly.
5. Push these changes to GitHub, and Firebase will automatically update the site with the new image.

---
*Note: DNS changes at GoDaddy can take up to 24 hours to "propagate" across the internet.*