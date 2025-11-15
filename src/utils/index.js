/**
 * Creates a page URL based on page name
 * @param {string} pageName - Name of the page
 * @returns {string} - URL path
 */
export function createPageUrl(pageName) {
  const routes = {
    'Home': '/',
    'Services': '/services',
    'About': '/about',
    'References': '/references',
    'Contact': '/contact',
    'Legal': '/legal',
  };

  return routes[pageName] || '/';
}
