export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import LatestSermon from '@/components/latest-sermon'
import AmNew from '@/components/am-new'
import ContactUs from '@/components/contact-us'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    < >
      <Hero />
      <LatestSermon />
      <AmNew />
      <ContactUs />
      {/* <Newsletter /> */}
    </>
  )
}
