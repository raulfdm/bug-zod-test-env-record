import { expect, it } from "vitest";
import { RecordSchema } from '../record-schema.js'

it("should validate a record", () => {
  const data = RecordSchema.parse({ name: "John", age: "30" });
  expect(data).toEqual({ name: "John", age: "30" });
});

it("should validate import.meta.env", () => {
  const data = RecordSchema.parse({
    ...import.meta.env
  });

  expect(data).toEqual(expect.any(Object));
});

it("should validate import.meta.env no spread", () => {
  const data = RecordSchema.parse(import.meta.env);

  expect(data).toEqual(expect.any(Object));
});

it("should validate process.env", () => {
  const data = RecordSchema.parse({
    ...process.env
  });

  expect(data).toEqual(expect.any(Object));
});

it("should validate process.env no spread", () => {
  const data = RecordSchema.parse(process.env);

  expect(data).toEqual(expect.any(Object));
});
