export default async function handler(req, res) {
  const response = await fetch("https://www.xticket.co.kr/MPTicketing/InfoWS/RIA.asmx/GetScheduleSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: "companyCd=SP0010&storeCd=01&planCompanyCd=PN0037&playYMD=20250503&scheCd=&riaType=N"

  });

  const text = await response.text();
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.status(200).send(text);
}
