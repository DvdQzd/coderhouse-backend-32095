import { assertEquals } from "https://deno.land/std@0.173.0/testing/asserts.ts";

Deno.test('example', () => {
    assertEquals(1, 1);
});

Deno.test('example2', () => {
    assertEquals('ejemplo', 'ejemplo');
});