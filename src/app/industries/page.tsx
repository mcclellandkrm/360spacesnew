import IndustryShowcase from '@/components/IndustryShowcase'

export const metadata = {
  title: 'Industries - 360Spaces Virtual Tour Solutions',
  description: 'Specialized virtual tour solutions for hospitality, automotive, retail, industrial, education, and real estate sectors.',
}

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-16">
      <IndustryShowcase />
    </main>
  )
}
