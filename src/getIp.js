export default async function getIp(value) {
  let data;
  try {
    let ipCurrent;
    if (!value) {
      const res_ip = await fetch("https://api64.ipify.org?format=json");
      const { ip } = await res_ip.json();
      ipCurrent = ip;
    }
    if (value) {
      // If it comes from input
      ipCurrent = value;
    }
    const res_loc = await fetch(`http://ip-api.com/json/${ipCurrent}`);
    data = await res_loc.json();
    if (data.status === "fail") throw new Error("Invalid query");
    return data;
  } catch (error) {
    console.error(error.message);
    return data;
  }
}
