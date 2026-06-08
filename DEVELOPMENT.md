# ILAW Lesson Plan Generator - Development Guide

## Project Structure

```
src/
├── app/                          # Next.js 15 app directory
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Landing page
│   ├── dashboard/
│   │   └── page.tsx             # Dashboard with saved lesson plans
│   ├── generator/
│   │   ├── page.tsx             # Main lesson plan generator form
│   │   └── preview/[id]/
│   │       └── page.tsx         # Lesson plan preview and export
│   ├── templates/
│   │   └── page.tsx             # Pre-made lesson plan templates
│   ├── api/
│   │   ├── generate/
│   │   │   ├── objectives/route.ts   # AI-generated learning objectives
│   │   │   └── context/route.ts      # AI-generated learner context
│   │   ├── export/
│   │   │   ├── pdf/route.ts         # PDF export API
│   │   │   └── docx/route.ts        # DOCX export API
│   │   └── templates/route.ts       # Fetch available templates
│   └── api/
├── components/
│   ├── ui/
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── input.tsx            # Input component
│   │   ├── label.tsx            # Label component
│   │   ├── textarea.tsx         # Textarea component
│   │   └── select.tsx           # Select component (optional)
│   ├── forms/
│   │   ├── BasicInfoForm.tsx    # Basic information form
│   │   ├── CurriculumForm.tsx   # Curriculum information form
│   │   └── LearnerContextForm.tsx
│   ├── theme-provider.tsx       # Dark mode provider
│   └── LessonPlanPreview.tsx    # Lesson plan display
├── hooks/
│   └── useLessonPlanStore.ts    # Zustand store for lesson plans
├── lib/
│   ├── ai.ts                    # OpenAI integration
│   ├── utils.ts                 # Utility functions (cn, etc.)
│   ├── validators.ts            # Zod schemas
│   ├── export.ts                # Export utilities (PDF, DOCX)
│   └── templates.ts             # Template data
├── types/
│   └── lessonPlan.ts            # TypeScript interfaces
├── styles/
│   └── globals.css              # Tailwind & global styles
└── utils/
    └── constants.ts             # Grade levels, subjects, quarters
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- OpenAI API key (for AI features)

### Installation

```bash
# Clone repository
git clone https://github.com/canolancejudiel8-create/Lansilogx.git
cd Lansilogx

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your OpenAI API key
# OPENAI_API_KEY=your_key_here

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Key Features Implementation

### 1. Dashboard (src/app/dashboard/page.tsx)
- Display saved lesson plans
- Quick actions (view, edit, delete)
- Create new plan button
- Recent plans list

### 2. Lesson Plan Generator Form (src/app/generator/page.tsx)
Multi-step wizard with sections:
- **Section A**: Basic Information
- **Section B**: Curriculum Information
- **Section C**: Learner Context
- **Section D**: Learning Experience
- **Section E**: Learning Resources
- **Section F**: Integration Opportunities
- **Section G**: Formative Assessment
- **Section H**: Extended Learning
- **Section I**: Reflection

### 3. AI Integration (src/lib/ai.ts)
- `generateLessonObjectives()` - Creates cognitive, psychomotor, affective objectives
- `generateLearnerContext()` - Creates learner context narratives
- `generateLearningExperience()` - Creates lesson activities
- More AI functions can be added

### 4. Export Functionality
- **PDF Export** (src/app/api/export/pdf/route.ts)
- **DOCX Export** (src/app/api/export/docx/route.ts)
- Print-friendly CSS

### 5. State Management (src/hooks/useLessonPlanStore.ts)
Using Zustand for:
- Storing lesson plans in memory
- Local storage persistence
- Current plan tracking

## API Routes

### Generate API
- `POST /api/generate/objectives` - Generate learning objectives
- `POST /api/generate/context` - Generate learner context
- `POST /api/generate/experience` - Generate learning experience

### Export API
- `POST /api/export/pdf` - Export lesson plan as PDF
- `POST /api/export/docx` - Export lesson plan as DOCX

### Templates API
- `GET /api/templates` - Get available templates

## Styling

Uses Tailwind CSS with custom design tokens:
- Primary: Blue (#0EA5E9)
- Secondary: Slate
- Dark mode support via next-themes

## Deployment

### Vercel
```bash
npm run build
git push
```

The project is configured for Vercel deployment.

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD npm start
```

## Database Integration (Future)

When ready to add persistence:
- **Database**: PostgreSQL/MongoDB
- **ORM**: Prisma/Mongoose
- Replace Zustand with server-side storage

Example Prisma schema:
```prisma
model LessonPlan {
  id String @id @default(cuid())
  title String
  teacherId String
  basicInfo Json
  curriculumInfo Json
  objectives Json
  learnerContext String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Environment Variables

```env
# .env.local
OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_APP_NAME=ILAW Lesson Plan Generator
NEXT_PUBLIC_APP_DESCRIPTION=AI-powered DepEd ILAW Lesson Plan Generator
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Testing

```bash
# Run tests (add Jest/Vitest later)
npm test

# Build for production
npm run build

# Start production server
npm start
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - See LICENSE file

## Support

For issues and questions:
- Open GitHub Issues
- Check existing documentation
- Contact: canolancejudiel8@gmail.com

## Future Enhancements

- [ ] User authentication & accounts
- [ ] Collaborative editing
- [ ] Advanced AI features
- [ ] Template marketplace
- [ ] Mobile app
- [ ] Real-time collaboration
- [ ] Analytics dashboard
- [ ] Import from existing lesson plans
