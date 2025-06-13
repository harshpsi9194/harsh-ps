
# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark professional theme with smooth animations and full mobile responsiveness.

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-brightgreen)](https://your-username.github.io/portfolio)
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC)](https://tailwindcss.com/)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Dark professional theme with smooth animations
- **Performance Optimized**: Fast loading and optimized for SEO
- **Accessibility**: ARIA labels and keyboard navigation support
- **Blog System**: Dynamic blog post management
- **Contact Form**: Functional contact form with email integration
- **Social Integration**: Links to all major social platforms

## 🏗️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Transforms

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
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

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Customization

### Personal Information

1. Update the hero section in `src/components/Hero.tsx`:
   - Change the name and introduction text
   - Update the project count and years of experience

2. Modify the skills in `src/components/Skills.tsx`:
   - Add or remove tools/technologies
   - Update icons and descriptions

3. Update social links throughout the components:
   - GitHub, LinkedIn, Instagram links
   - Email address in the contact form

### Content Management

#### Adding New Projects

Edit `src/components/Projects.tsx` and add new project objects to the `projects` array:

```typescript
{
  id: 4,
  title: "Your Project Title",
  description: "Project description...",
  image: "path/to/image.jpg",
  github: "https://github.com/username/repo",
  live: "https://your-live-site.com",
  tech: ["React", "Node.js", "MongoDB"]
}
```

#### Adding Blog Posts

Blog posts are managed in `src/components/Blogs.tsx`. Add new posts to the `blogPosts` array:

```typescript
{
  id: 4,
  title: "Your Blog Post Title",
  excerpt: "Brief description of the post...",
  date: "Jan 15, 2025",
  readTime: "5 min read",
  image: "path/to/image.jpg"
}
```

For a full blog system with Markdown support, consider integrating with:
- **Netlify CMS**: For content management
- **GitHub-based CMS**: Using GitHub issues or files
- **Headless CMS**: Contentful, Strapi, or similar

#### Updating Resources

Modify `src/components/Resources.tsx` to add downloadable resources:

```typescript
{
  id: 4,
  title: "Resource Title",
  description: "Resource description",
  icon: IconComponent,
  downloadUrl: "/path/to/file.pdf",
  size: "File size"
}
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select "GitHub Actions" as the source
5. The site will auto-deploy on every push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Custom Domain Setup

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📧 Contact Form Integration

### EmailJS Setup (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS: `npm install @emailjs/browser`
4. Update the contact form in `src/components/Contact.tsx`

### Alternative Options

- **Netlify Forms**: If hosting on Netlify
- **Formspree**: Simple form handling service
- **AWS SES**: For advanced email functionality

## 🎨 Customizing the Design

### Colors

The color palette is defined in `src/index.css` and uses CSS custom properties. Update the color values to match your brand:

```css
:root {
  --background: #1f1f1f;
  --card-background: #2a2a2a;
  --accent-color: #3a2a3a;
}
```

### Typography

The site uses Inter font from Google Fonts. To change the font:

1. Update the Google Fonts link in `index.html`
2. Modify the font family in `tailwind.config.ts`

### Layout

All components are modular and can be easily rearranged or modified:

- `src/components/Navbar.tsx` - Navigation
- `src/components/Hero.tsx` - Landing section
- `src/components/Skills.tsx` - Skills showcase
- `src/components/Projects.tsx` - Project portfolio
- `src/components/Blogs.tsx` - Blog section
- `src/components/Resources.tsx` - Downloadable resources
- `src/components/Contact.tsx` - Contact form
- `src/components/Footer.tsx` - Site footer

## 🔧 Performance Optimization

The site is already optimized for performance:

- **Code Splitting**: Components are loaded efficiently
- **Image Optimization**: Use WebP format when possible
- **Lazy Loading**: Images load as needed
- **Minification**: CSS and JS are minified in production

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**: Check that all dependencies are installed
2. **Images not loading**: Ensure image paths are correct
3. **Deployment issues**: Verify GitHub Pages settings

### Development Issues

- Clear node_modules and reinstall if you encounter dependency issues
- Check browser console for JavaScript errors
- Ensure all imports are correctly specified

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Create an issue on GitHub
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ using React and Tailwind CSS**
