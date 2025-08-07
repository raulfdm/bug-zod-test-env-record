import * as v from "valibot";
import { z } from "zod";

 const ZodRecord = z.record(
	z.string(),
	z.string().or(z.number()).or(z.boolean()).optional(),
);

 const ValibotRecord = v.record(
  v.string(),
 v.optional( v.union([
   v.string(),
   v.number(),
   v.boolean()
 ]))
)

export const recordSchemas = [
  ['zod', (config) => ZodRecord.parse(config)],
  ['valibot',(config) => v.parse(ValibotRecord, config)],
]
