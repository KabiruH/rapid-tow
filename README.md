# Rapid Tow Recovery Website

A modern, responsive website for a towing company built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Modern Stack: Next.js 14, TypeScript, Tailwind CSS
- 🎨 Responsive Design: Mobile-first approach
- 🌙 Dynamic Background: Image carousel implementation
- 📧 Contact Form: EmailJS integration with toast notifications
- 🔍 SEO Optimized: Meta tags and semantic HTML
- 🎯 Core Pages:
  - Homepage with service highlights
  - About page with company history
  - Services page with detailed offerings
  - Contact page with form submission

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Email Service:** EmailJS
- **Notifications:** Sonner
- **Icons:** Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kabiruh/rapid-tow-recovery.git
```

2. Install dependencies:
```bash
cd rapid-tow-recovery
npm install
```

3. Configure environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to view the website.

## Key Components

### Contact Form

The contact form component includes:
- Form validation
- EmailJS integration
- Toast notifications
- Loading states
- Error handling

### Background Carousel

The homepage features a dynamic background carousel:
- Smooth transitions
- Responsive images
- Automatic rotation
- Overlay effects

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. Create new components in the appropriate directory
2. Update pages as needed
3. Add styles using Tailwind classes
4. Test responsive design
5. Update README if necessary

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under Marsh.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [EmailJS](https://www.emailjs.com/)
- [Sonner](https://sonner.emilkowal.ski/)

## Contact

For any questions or concerns, please contact Kabiru at huriakelvin@gmail.com