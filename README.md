# ILAW Lesson Plan Generator

AI-powered DepEd ILAW Lesson Plan Generator for Filipino teachers.

## Features

- ✨ **AI-Powered Generation** - Automatically generate complete lesson plans
- 📋 **ILAW Format Compliant** - All plans follow official DepEd structure
- 📄 **Multiple Export Formats** - PDF, DOCX, and Print support
- 💾 **Save & Organize** - Local storage for saved lesson plans
- 🎨 **Modern UI** - Clean, responsive design with dark mode support
- 🔧 **Customizable** - Edit and improve generated content

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **AI**: OpenAI API
- **Export**: PDF (PDFKit) & DOCX (docx)
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/canolancejudiel8-create/Lansilogx.git
cd Lansilogx
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local`
```bash
cp .env.example .env.local
```

4. Add your OpenAI API key
```
OPENAI_API_KEY=your_key_here
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                # Shadcn UI components
│   └── forms/             # Form components
├── lib/                    # Utilities and helpers
│   ├── ai/                # AI integration
│   ├── export/            # Export utilities
│   └── validators/        # Zod schemas
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
├── utils/                  # Helper functions
└── styles/                # Global styles
```

## Pages

- `/` - Landing page
- `/dashboard` - Dashboard with saved lesson plans
- `/generator` - Main lesson plan generator
- `/generator/preview` - Preview generated lesson plan
- `/templates` - Pre-made templates

## API Routes

- `POST /api/generate` - Generate lesson plan content
- `POST /api/export` - Export lesson plan
- `GET /api/templates` - Get available templates
- `POST /api/save` - Save lesson plan
- `GET /api/saved` - Get saved lesson plans

## Contributing

Contributions are welcome! Please read our contributing guidelines first.

## License

MIT License - See LICENSE file for details

## Support

For issues and questions, please open a GitHub issue.
