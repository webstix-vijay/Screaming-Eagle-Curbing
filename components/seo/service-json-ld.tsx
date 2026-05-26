import { JsonLd } from '@/components/seo/json-ld'
import { serviceSchema } from '@/lib/seo/schema'

type ServiceJsonLdProps = {
  name: string
  description: string
  path: string
}

export function ServiceJsonLd({ name, description, path }: ServiceJsonLdProps) {
  return <JsonLd data={serviceSchema({ name, description, path })} />
}
