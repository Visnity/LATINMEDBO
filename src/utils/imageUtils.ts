export const getImagePath = (category: string, filename: string): string => {
  return `/images/${category}/${filename}`;
};

export const getAssetPath = (filename: string): string => {
  return `/src/assets/${filename}`;
};

export const imageCategories = {
  PRODUCTS: 'products',
  TEAM: 'team',
  DIVISIONS: 'divisions',
  BLOG: 'blog',
} as const;