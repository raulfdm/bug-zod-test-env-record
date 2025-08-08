import * as v from "valibot";
import { z } from "zod";

const ZodRecord = z.record(
	z.string(),
	z.string().or(z.number()).or(z.boolean()).optional(),
);

const ValibotRecord = v.record(
	v.string(),
	v.optional(v.union([v.string(), v.number(), v.boolean()])),
);

export const recordSchemas: [
	schemaLibName: string,
	(config: Record<string, any>) => any,
][] = [
	["zod", (config: Record<string, any>) => ZodRecord.parse(config)],
	["valibot", (config: Record<string, any>) => v.parse(ValibotRecord, config)],
];
