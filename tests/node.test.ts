import assert from "node:assert";
import { test } from "node:test";
import { recordSchemas } from "../record-schema.ts";

recordSchemas.forEach(([type, parseFn]) => {
	test.describe(type, () => {
		test("should validate a record", () => {
			const data = parseFn({ name: "John", age: "30" });
			assert.deepStrictEqual(data, { name: "John", age: "30" });
		});

		test("should validate import.meta.env", () => {
			const data = parseFn({
				...import.meta.env,
			});

			assert.strictEqual(
				typeof data,
				"object",
				"Parsed data should be an object",
			);
			assert.ok(data !== null, "Parsed data should not be null");
		});

		test("should validate import.meta.env no spread", () => {
			const data = parseFn(import.meta.env);

			assert.strictEqual(
				typeof data,
				"object",
				"Parsed data should be an object",
			);
			assert.ok(data !== null, "Parsed data should not be null");
		});

		test("should validate process.env", () => {
			const data = parseFn({
				...process.env,
			});

			assert.strictEqual(
				typeof data,
				"object",
				"Parsed data should be an object",
			);
			assert.ok(data !== null, "Parsed data should not be null");
		});

		test("should validate process.env no spread", () => {
			const data = parseFn(process.env);

			assert.strictEqual(
				typeof data,
				"object",
				"Parsed data should be an object",
			);
			assert.ok(data !== null, "Parsed data should not be null");
		});
	});
});
