# Maria Mannan - Portfolio Website

A modern, sophisticated portfolio website built with React and Vite, featuring smooth animations and a beautiful dark theme with teal accents.

![Portfolio Preview](preview.png)

## 🚀 Features

- **Modern Design**: Dark theme with elegant teal accents
- **Smooth Animations**: Powered by Framer Motion
- **Responsive**: Works beautifully on all devices
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal bundle size

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **CSS3** - Custom styling with CSS Variables

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MariaMannan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🌐 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the Vite configuration
5. Click Deploy!

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx/css
│   │   ├── Achievements.jsx/css
│   │   ├── Contact.jsx/css
│   │   ├── Experience.jsx/css
│   │   ├── Footer.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── Loader.jsx/css
│   │   ├── Navbar.jsx/css
│   │   ├── Projects.jsx/css
│   │   └── Skills.jsx/css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vercel.json
├── vite.config.js
└── package.json
```

## ✏️ Customization

### Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-accent-primary: #14b8a6;    /* Main accent color */
  --color-accent-secondary: #0d9488;  /* Secondary accent */
  --color-accent-tertiary: #2dd4bf;   /* Tertiary accent */
  /* ... more variables */
}
```

### Content
Update your personal information in the component files:
- `Hero.jsx` - Name, tagline, social links
- `About.jsx` - Bio and education
- `Experience.jsx` - Work experience
- `Skills.jsx` - Technical skills
- `Projects.jsx` - Your projects
- `Achievements.jsx` - Awards and interests
- `Contact.jsx` - Contact information

### Resume
Add your resume PDF to the `public` folder as `resume.pdf`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Maria Mannan**
- Email: malik.maria6200@gmail.com
- LinkedIn: [linkedin.com/in/maria-malik-090946234](https://linkedin.com/in/maria-malik-090946234)
- GitHub: [github.com/MariaMannan](https://github.com/MariaMannan)

---

Built with ❤️ by Maria Mannan
