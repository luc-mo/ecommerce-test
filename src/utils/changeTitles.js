export function changeTitles(htmlString) {
  return htmlString.replace(/<h1>|<h2>/g, '<h3>').replace(/<\/h1>|<\/h2>/g, '</h3>');
}