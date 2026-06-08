import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Zap, Share2 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Generation',
    description: 'Automatically generate complete lesson plans aligned with DepEd ILAW standards',
  },
  {
    icon: BookOpen,
    title: 'ILAW Format Compliant',
    description: 'All lesson plans follow the official ILAW structure and requirements',
  },
  {
    icon: FileText,
    title: 'Multiple Export Formats',
    description: 'Export as PDF, DOCX, or print directly for classroom use',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Save, organize, and share your lesson plans with colleagues',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">ILAW Lesson Plan Generator</h1>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="/generator">Create Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Transform Your Lesson Planning
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
            Create professionally formatted ILAW lesson plans in minutes with AI assistance.
            Perfect for elementary, junior high, and senior high school teachers.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/generator">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h3 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">Features</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <Icon className="h-10 w-10 text-blue-600" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-blue-600 px-8 py-12 text-center">
          <h3 className="text-3xl font-bold text-white">Ready to Create Your First Lesson Plan?</h3>
          <p className="mt-4 text-lg text-blue-100">
            Join teachers across the Philippines using ILAW Lesson Plan Generator
          </p>
          <Button size="lg" variant="secondary" asChild className="mt-8">
            <Link href="/generator">Create New Lesson Plan</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-slate-600 dark:text-slate-400">
            © 2026 ILAW Lesson Plan Generator. Made for Philippine teachers. Aligned with DepEd standards.
          </p>
        </div>
      </footer>
    </div>
  );
}
