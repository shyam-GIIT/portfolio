# Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and stylish design with glassmorphism effects
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Interactive 3D elements with Spline
- ⚡ Optimized for performance
- 🌙 Dark theme

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Spline
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## Project Structure

```
/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── portfolio/      # Portfolio section components
├── lib/                # Utility functions
└── public/             # Static assets
```

## License

This project is private and personal.

