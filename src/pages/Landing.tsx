import { Helmet } from 'react-helmet-async'
import { APP_DESCRIPTION } from '../lib/constants'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Hero } from '../components/landing/Hero'
import { Simulation } from '../components/landing/Simulation'
import { FeatureStrip } from '../components/landing/FeatureStrip'
import { WhySection } from '../components/landing/WhySection'
import { ProblemSolution } from '../components/landing/ProblemSolution'
import { HowItWorks } from '../components/landing/HowItWorks'
import { Roadmap } from '../components/landing/Roadmap'
import { PricingPreview } from '../components/landing/PricingPreview'
import { AboutSection } from '../components/landing/AboutSection'
import { Testimonials } from '../components/landing/Testimonials'
import { CTASection } from '../components/landing/CTASection'

export default function Landing() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>RoleKeeper — Structure Your AI Workflow</title>
        <meta name="description" content={APP_DESCRIPTION} />
      </Helmet>

      <Hero />
      <Simulation />
      <FeatureStrip />
      <WhySection />
      <ProblemSolution />
      <HowItWorks />
      <Roadmap />
      <PricingPreview />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
