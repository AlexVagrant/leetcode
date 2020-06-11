import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { permute, } from '../../premute/premute.ts';

Deno.test({
	name: 'subsets',
	fn: (): void => {
		const res: number[][] = [
			[1,2,3],
			[1,3,2],
			[2,1,3],
			[2,3,1],
			[3,1,2],
			[3,2,1]	
		]
		assertEquals(permute([1,2,3]), res)
	}
})