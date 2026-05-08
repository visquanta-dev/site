const REVIEW_REPLIES_SLUG = '63-car-buyers-judge-dealers-review-replies';

function isReviewRepliesPost(slug?: string, image?: string) {
  return slug === REVIEW_REPLIES_SLUG || image?.includes(`/${REVIEW_REPLIES_SLUG}/`) === true;
}

export function getBlogImageObjectPosition(slug?: string, image?: string): string {
  if (isReviewRepliesPost(slug, image)) {
    return '24% center';
  }

  return 'center center';
}
