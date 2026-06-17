/** Responsive `sizes` hints for Next/Image — improves LCP and CLS */
export const IMAGE_SIZES = {
  fullWidth: '100vw',
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  contentHalf: '(max-width: 1024px) 100vw, 50vw',
  card: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  logo: '(max-width: 768px) 160px, 160px',
  galleryThumb: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
} as const
