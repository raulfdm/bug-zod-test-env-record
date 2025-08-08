import { recordSchemas } from "./record-schema.ts";

for (const [libName, parser] of recordSchemas) {
  console.log('Lib',libName)

  console.log('process.env', 'typeof', typeof process.env)
  // parser(process.env) // Will throw an error
  parser({...process.env}) // will not
}
