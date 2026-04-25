# Quick Start Guide 🚀

This guide will help you set up and run Maria Mannan's Portfolio website on any new computer.

---

## Prerequisites

Before you begin, make sure you have **Node.js** installed on your computer.

### Step 1: Check if Node.js is Installed

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
node --version
```

If you see a version number (e.g., `v20.10.0`), you're good to go! Skip to [Project Setup](#project-setup).

If you get an error, follow Step 2.

### Step 2: Install Node.js

#### Option A: Download from Official Website (Recommended)
1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** (Long Term Support) version
3. Run the installer and follow the prompts
4. Restart your terminal after installation

#### Option B: Using Package Managers

**On Mac (using Homebrew):**
```bash
brew install node
```

**On Windows (using Chocolatey):**
```bash
choco install nodejs-lts
```

**On Ubuntu/Debian:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 3: Verify Installation

```bash
node --version
npm --version
```

Both commands should return version numbers.

---

## Project Setup

### Step 1: Navigate to the Project Folder

Open your terminal and navigate to where you copied the portfolio folder:

```bash
cd /path/to/portfolio
```

**Examples:**
- Mac/Linux: `cd ~/Documents/portfolio`
- Windows: `cd C:\Users\YourName\Documents\portfolio`

### Step 2: Install Dependencies

Run this command to install all required packages:

```bash
npm install
```

This will create a `node_modules` folder and download all dependencies. This may take 1-2 minutes.

### Step 3: Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

### Step 4: View the Website

Open your browser and go to:
```
http://localhost:5173
```

🎉 **Your portfolio is now running!**

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

To preview the production build locally:

```bash
npm run preview
```

---

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub + Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically detect Vite and configure everything!

---

## Troubleshooting

### Problem: `npm install` fails with permission errors

**Solution (Mac/Linux):**
```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

**Solution (Windows):**
Run Command Prompt as Administrator.

### Problem: Port 5173 is already in use

**Solution:** Use a different port:
```bash
npm run dev -- --port 3000
```

### Problem: Node version too old

**Solution:** Update Node.js to version 20 or higher:
```bash
# Using nvm (Node Version Manager)
nvm install 20
nvm use 20
```

### Problem: Changes not showing in browser

**Solution:** 
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart the dev server

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.png      # Your profile picture
│   └── favicon.svg          # Browser tab icon
├── src/
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
└── vercel.json              # Vercel deployment config
```

---

## Customization

### Update Profile Picture
Replace `/public/images/profile.png` with your new image.

### Update Colors
Edit CSS variables in `/src/index.css`:
```css
:root {
  --color-accent-primary: #14b8a6;  /* Change this */
}
```

### Update Content
Edit the component files in `/src/components/` to update text, experience, skills, etc.

---

## Need Help?

- **Vite Documentation:** [vitejs.dev](https://vitejs.dev)
- **React Documentation:** [react.dev](https://react.dev)
- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)

---
# 1. Copy folder to new laptop (without node_modules)

# 2. Open terminal and navigate to folder
cd /path/to/portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open browser
# Go to http://localhost:5173


Made with ❤️ by Maria Mannan

