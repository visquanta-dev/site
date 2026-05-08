export const REVIEW_REPLIES_SLUG = '63-car-buyers-judge-dealers-review-replies';

export type BlogImageMode = 'editorial_photo' | 'text_graphic' | 'data_visual';

export interface BlogImagePresentationInput {
  slug?: string;
  title?: string;
  image?: string;
  imageMode?: string;
  imageFocalPoint?: string;
  hideImageOverlay?: boolean;
}

const VALID_IMAGE_MODES = new Set<BlogImageMode>(['editorial_photo', 'text_graphic', 'data_visual']);

function normalizeMode(mode?: string): BlogImageMode | undefined {
  const value = String(mode || '').trim().toLowerCase().replace(/-/g, '_');
  return VALID_IMAGE_MODES.has(value as BlogImageMode) ? (value as BlogImageMode) : undefined;
}

export function isReviewRepliesPost(slug?: string, image?: string) {
  return slug === REVIEW_REPLIES_SLUG || image?.includes(`/${REVIEW_REPLIES_SLUG}/`) === true;
}

export function getBlogImageMode(input: BlogImagePresentationInput): BlogImageMode {
  const explicitMode = normalizeMode(input.imageMode);
  if (explicitMode) return explicitMode;

  // Backward compatibility for the PR 67 post while older branches catch up to
  // the new image metadata contract.
  if (
    isReviewRepliesPost(input.slug, input.image) ||
    input.title?.toLowerCase().includes('review replies')
  ) {
    return 'text_graphic';
  }

  return 'editorial_photo';
}

export function shouldHideBlogImageOverlay(input: BlogImagePresentationInput): boolean {
  return input.hideImageOverlay === true || getBlogImageMode(input) === 'text_graphic';
}

export function getBlogImageObjectPosition(input: BlogImagePresentationInput): string {
  const focalPoint = String(input.imageFocalPoint || '').trim().toLowerCase().replace(/-/g, ' ');

  switch (focalPoint) {
    case 'left':
    case 'left center':
      return 'left center';
    case 'right':
    case 'right center':
      return 'right center';
    case 'top':
    case 'center top':
      return 'center top';
    case 'bottom':
    case 'center bottom':
      return 'center bottom';
    default:
      return 'center center';
  }
}

export function getBlogImageObjectFit(input: BlogImagePresentationInput): 'cover' | 'contain' {
  const mode = getBlogImageMode(input);
  return mode === 'data_visual' || mode === 'text_graphic' ? 'contain' : 'cover';
}
