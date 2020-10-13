/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  // Return the path depending on Prismic Document's type

  // If it's a Single Custom Type with the API ID of "home"
  if (doc.type === 'home') {
    return '/';
  }

  // If it is a Repeatable Custom Type with the API ID of "page" (must contain a UID field)
  if (doc.type === 'page') {
    return '/page/' + doc.uid;
  }

  if (doc.isBroken) {
    return '/not-found'
  }

  // Default to the root
  return '/';
};
