import TechnologyOverview from '@/components/TechnologyOverview'

export const metadata = {
  title: 'Technology - 360Spaces Equipment & Process',
  description: 'Learn about our cutting-edge equipment and proven process for creating professional virtual tours.',
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-16">
      <TechnologyOverview />
    </main>
  )
}
