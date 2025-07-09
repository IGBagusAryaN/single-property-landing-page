# 💻 Frontend Practical Test – Skatcher Footer

This project is a responsive implementation of the footer section based on the provided Figma design. It was built using React.js and Tailwind CSS v3 with a mobile-first approach, ensuring compatibility across mobile (375px), tablet (768px), and desktop (1440px) viewports. The layout emphasizes clean utility-based classes, accessibility, and performance.

## ⚙️ Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skatcher-footer.git
cd skatcher-footer
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🛠️ Technologies Used
- React.js + Vite
- Tailwind CSS v3.14
- Framer Motion

## 🎨 Tailwind CSS Configuration Decision
Tailwind was configured via `tailwind.config.js` with extended custom colors and responsive breakpoints (`md`, `lg`). The purge/content settings are enabled to remove unused classes in production for better performance.

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        gray: {
          400: "#A1A1A1",
          500: "#6B7280",
          700: "#374151"
        }
      }
    }
  },
  plugins: [],
}
```

## 💡 Design Decisions 
- Determining the appropriate size and layout for videos or images within a responsive layout
- Creating actions for search buttons and menus in the mobile version

## Challenges
- Creating responsive layouts for mobile, tablet, and desktop
- Adjusting details in Figma

## 🌐 Browser Compatibility
✅ Google Chrome  
✅ Microsoft Edge  

## ⚡ Performance Optimizations
- Tailwind Just-In-Time (JIT) mode enabled for efficient build
- Purged unused CSS during production builds
- Optimized images with proper dimensions
- No unnecessary dependencies added

## 📸 Preview
![Preview Screenshot](./public/preview.png)

## 📄 License
This project is for testing and evaluation purposes only.
