# Abinandida R - Portfolio Website

A stunning, modern, and professional portfolio website showcasing the work and expertise of Abinandida R, a final-year B.Tech AI & Data Science student at Anna University, Coimbatore.

## 🌟 Features

- **Modern Design**: Elegant dark theme with neon accents and smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Typing animations, hover effects, and smooth transitions
- **Professional Sections**: Hero, About, Experience, Projects, Skills, Certifications, Blogs, Contact
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **PWA Ready**: Offline capability and app-like experience

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the website

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with profile
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Featured projects
│   ├── Skills.tsx      # Skills and technologies
│   ├── Certifications.tsx # Professional certifications
│   ├── Blogs.tsx       # Blog posts section
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles

public/
├── me.jpg             # Profile photo
├── ProfessionalResume.pdf # Resume file
└── index.html         # HTML template
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, location
- `src/components/About.tsx` - Bio, skills, social links
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### Assets
- Replace `public/me.jpg` with your profile photo
- Replace `public/ProfessionalResume.pdf` with your resume

### Styling
- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for global styles

## 🚀 Deployment to Netlify

### Method 1: Direct Deployment (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in to your account

3. **Deploy via Drag & Drop**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop the `dist` folder to the deployment area
   - Your site will be deployed instantly!

### Method 2: Git Integration (Automatic Deployments)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - In Netlify dashboard, click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## ⚙️ Build Configuration

The project uses Vite for building. Key configurations:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18 or higher (recommended)

### Environment Variables (if needed)
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Abinandida R Portfolio
VITE_CONTACT_EMAIL=abinandida4@gmail.com
```

## 🔧 Netlify Configuration

Create a `netlify.toml` file in the root directory for advanced configuration:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.processing]
  skip_processing = false

[build.processing.css]
  bundle = true
  minify = true

[build.processing.js]
  bundle = true
  minify = true

[build.processing.html]
  pretty_urls = true
```

## 📱 PWA Configuration

The site is PWA-ready. To enable full PWA features:

1. Add a `manifest.json` file in the `public` directory
2. Configure service worker for offline functionality
3. Add PWA meta tags in `index.html`

## 🔍 SEO Optimization

The site includes:
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data for search engines
- Optimized images and performance
- Semantic HTML structure

## 📊 Performance Tips

- Images are optimized and properly sized
- CSS and JS are minified in production
- Lazy loading for images and components
- Efficient bundle splitting with Vite

## 🐛 Troubleshooting

### Common Issues:

1. **Build fails on Netlify**
   - Check Node.js version (use 18+)
   - Verify all dependencies are in `package.json`
   - Check for TypeScript errors

2. **Images not loading**
   - Ensure images are in the `public` directory
   - Check file paths and names

3. **Routing issues**
   - Add redirects in `netlify.toml` for SPA routing

## 📞 Support

For issues or questions:
- Email: abinandida4@gmail.com
- LinkedIn: [Abinandida R](https://linkedin.com/in/abinandida-r-377128258)
- GitHub: [camelia409](https://github.com/camelia409)

---

**Built with ❤️ by Abinandida R**