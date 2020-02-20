export default async function getListFromUrl(url) {
    const response = await fetch(url);
    return await response.json();
}