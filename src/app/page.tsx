import Hero from '@/components/Hero'
import IndustryShowcase from '@/components/IndustryShowcase'
import ServiceTiers from '@/components/ServiceTiers'
import TechnologyOverview from '@/components/TechnologyOverview'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IndustryShowcase />
      <ServiceTiers />
      <TechnologyOverview />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
