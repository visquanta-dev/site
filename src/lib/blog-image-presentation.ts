export const REVIEW_REPLIES_SLUG = '63-car-buyers-judge-dealers-review-replies';

export function isReviewRepliesPost(slug?: string, image?: string) {
  return slug === REVIEW_REPLIES_SLUG || image?.includes(`/${REVIEW_REPLIES_SLUG}/`) === true;
}

export function getBlogImageObjectPosition(slug?: string, image?: string): string {
  if (isReviewRepliesPost(slug, image)) {
    return 'center center';
  }

  return 'center center';
}

export function getBlogImageObjectFit(slug?: string, image?: string): 'cover' | 'contain' {
  if (isReviewRepliesPost(slug, image)) {
    return 'contain';
  }

  return 'cover';
}
