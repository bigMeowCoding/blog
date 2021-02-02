export function parseQueryParam(query: string | string[] | undefined): string {
  return query ? (Array.isArray(query) ? query.join("") : query) : "";
}
