export const joinUrlSnippet = (urlSnippetArray) => {
  return urlSnippetArray.join("/").replace(/\/+/g, '/');
}

export const cleanUrlSlash = (str) => {
  return str.replace(/\/+/g, '/');
};