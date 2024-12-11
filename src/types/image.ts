export interface ImageMeta {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  category: string;
}

export interface ResponsiveImage extends ImageMeta {
  srcset?: string;
  sizes?: string;
}