import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { subsets, } from '../../subsets/index.ts';

Deno.test({
	name: 'subsets',
	fn: (): void => {
		console.log(subsets)
		const res: number[][] = [
			[],
			[1],
			[1,2],
			[1,2,3],
			[1,3],
			[2],
			[2,3],
			[3],
		]
		assertEquals(subsets([1,2,3]), res)
	}
})