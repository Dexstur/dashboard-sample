export function dtoToQuery(dto: { [key: string]: any }) {
  const validKeys = Object.keys(dto).filter((key) => dto[key] !== undefined);
  const query = validKeys.map((key) => `${key}=${dto[key]}`).join("&");
  return query;
}
