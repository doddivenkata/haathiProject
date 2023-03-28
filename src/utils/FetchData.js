export default async function FetchData(url, method, headers, body) {
  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  try {
    const data = await fetch(url, {
      method: method,
      headers: headers ? headers : defaultHeaders,
      body: body,
    });
    const responseData = await data.json();
    return { responseData, data };
  } catch (err) {
    return { err };
  }
}
