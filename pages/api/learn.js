// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'


export default function handler(req, res) {
  fs.writeFileSync("database/ia-database.json", req.body.newJSON)
}
