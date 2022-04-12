import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'



// export function linkResolver(doc) {
//   switch (doc.type) {
//     case 'homepage':
//       return '/'
//     case 'page':
//       return `/${doc.uid}`
//     default:
//       return null
//   }
// }

export function createClient(config = {}) {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}