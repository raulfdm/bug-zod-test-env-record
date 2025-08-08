import * as v from "valibot";
import { z } from "zod";

const ZodRecord = z.record(
	z.string(),
	z.string().or(z.number()).or(z.boolean()).optional(),
).default({});

const ValibotRecord = v.optional(v.record(
	v.string(),
	v.optional(v.union([v.string(), v.number(), v.boolean()])),
), {})

export const recordSchemas: [
	schemaLibName: string,
	(config: Record<string, any>) => any,
][] = [
	["valibot", (config: Record<string, any>) => v.parse(ValibotRecord, config)],
	["zod", (config: Record<string, any>) => ZodRecord.parse(config)],
];
