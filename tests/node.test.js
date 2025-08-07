import assert from "node:assert";
import { test } from "node:test";
import { RecordSchema } from "./record-schema.js";

test("should validate a record", () => {
	const data = RecordSchema.parse({ name: "John", age: "30" });
	assert.deepStrictEqual(data, { name: "John", age: "30" });
});

test("should validate import.meta.env", () => {
	const data = RecordSchema.parse({
		...import.meta.env,
	});

	assert.strictEqual(typeof data, "object", "Parsed data should be an object");
	assert.ok(data !== null, "Parsed data should not be null");
});

test("should validate import.meta.env no spread", () => {
	const data = RecordSchema.parse(import.meta.env);

	assert.strictEqual(typeof data, "object", "Parsed data should be an object");
	assert.ok(data !== null, "Parsed data should not be null");
});

test("should validate process.env", () => {
	const data = RecordSchema.parse({
		...process.env,
	});

	assert.strictEqual(typeof data, "object", "Parsed data should be an object");
	assert.ok(data !== null, "Parsed data should not be null");
});

test("should validate process.env no spread", () => {
	const data = RecordSchema.parse(process.env);

	assert.strictEqual(typeof data, "object", "Parsed data should be an object");
	assert.ok(data !== null, "Parsed data should not be null");
});
