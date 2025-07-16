import ServiceTiers from '@/components/ServiceTiers'

export const metadata = {
  title: 'Services - 360Spaces Virtual Tour Packages',
  description: 'Choose from Essential, Professional, Premium, or Enterprise virtual tour packages. From Google Street View to 3DVista custom solutions.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16">
      <ServiceTiers />
    </main>
  )
}
