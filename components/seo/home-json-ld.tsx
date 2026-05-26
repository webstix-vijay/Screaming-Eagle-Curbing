import { JsonLd } from '@/components/seo/json-ld'
import { faqPageSchema } from '@/lib/seo/schema'

export function HomeJsonLd() {
  return <JsonLd data={faqPageSchema()} />
}
