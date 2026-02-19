import { Hero }        from '../components/Hero';
import { TrustStrip }  from '../components/TrustStrip';
import { Industries }  from '../components/Industries';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services }    from '../components/Services';
import { Process }     from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { CTA }         from '../components/CTA';

/**
 * HomePage — Assembles all homepage sections in order.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Industries />
      <WhyChooseUs />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
