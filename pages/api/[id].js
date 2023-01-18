import path from 'path';
import { promises as fs } from 'fs';
import { checkFullName, checkAge } from '@/functions/check';

const filePath = path.join(process.cwd(), 'functions', 'data.json')
export default async function handler(req, res) {
  const { id } = req.query
  if (id === "setData" && req.method === "POST") {
    console.log("🚀 ~ file: [id].js:14 ~ handler ~ age: req.body.age", req.body.age)
    console.log("🚀 ~ file: [id].js:14 ~ handler ~ req.body.fullName", req.body.fullName)
    if (checkFullName(req.body.fullName) && checkAge(req.body.age)) {
      const json = await fs.readFile(filePath, 'utf8');
      let data = JSON.parse(json)
      const dataObject = { name: req.body.fullName, age: req.body.age }
      data.push(dataObject)
      fs.writeFile(filePath, JSON.stringify(data))
    }
    else {
      res.status(406).send("Invalid Data")
    }
  }
  else if (id === "getData" && req.method === "GET") {
    let data = getData();
    res.json(data)
  }
  else {
    res.status(400).send("Invalid ID")
  }
  res.end();
}

export async function getData() {
  const json = await fs.readFile(filePath, 'utf8');
  let data = JSON.parse(json)
  return data
}
