export default async function getIp(value) {
  try {
    if (value) {
      const res = await fetch(`https://freeipapi.com/api/json/${value}`);
      const data = await res.json();
      return data;
    }
    const res = await fetch("https://freeipapi.com/api/json/");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
