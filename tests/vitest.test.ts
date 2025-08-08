import { describe, expect, test } from "vitest";
import { recordSchemas } from "../record-schema";

describe.each(recordSchemas)("%s", (_name, parseFn) => {
	test("should validate a record", () => {
		const data = parseFn({ name: "John", age: "30" });
		expect(data).toEqual({ name: "John", age: "30" });
	});

	test("should validate import.meta.env (spreading)", () => {
		const data = parseFn({
			...import.meta.env,
		});

		expect(data).toEqual(expect.any(Object));
	});

	test("should validate import.meta.env (no spread)", () => {
		const data = parseFn(import.meta.env);

		expect(data).toEqual(expect.any(Object));
	});

	test("should validate process.env", () => {
		const data = parseFn({
			...process.env,
		});

		expect(data).toEqual(expect.any(Object));
	});

	test("should validate process.env no spread", () => {
		const data = parseFn(process.env);

		expect(data).toEqual(expect.any(Object));
	});
});
