// Product image mappings
export const productImages: Record<string, string> = {
  'ORI-FUL': 'https://somaticvr.com/assets/products/core-set.webp',
  'HAR-FUL': 'https://cdn.prod.website-files.com/615ff9cd5c0185a6354c51b8/69044ec6f8f6622cc0a7a803_73b48e43d156d44ccc9cca61b688f5f7_haritorax2proeyechatch_2.png',
  'SLI-FUL': 'https://www.crowdsupply.com/img/371f/d186e355-1cef-40e5-bec1-2a728463371f/slimevr-five-units-flat-sept2024_jpg_gallery-lg.jpg',
  'FLX-FUL': 'https://static.wixstatic.com/media/6fd1a3_51d56bb207524207b3acf43b7fc9fa09~mv2.png/v1/fill/w_980,h_697,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Hub8Devices.png',
  'QSE-FUL': 'https://qsense-motion.com/wp-content/uploads/2025/04/MG_3998-1-scaled.jpg',
  'TES-FUL': 'https://teslasuit.io/wp-content/uploads/MoCap.png'
};

/**
 * Returns the image URL for a given SKU, or a default placeholder
 */
export function getProductImage(sku: string): string {
  return productImages[sku] || 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg';
}