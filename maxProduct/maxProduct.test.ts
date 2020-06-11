import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
import { maxProduct } from './maxProduct2.ts';

Deno.test({
    name: "maxProduct",
    fn(): void {
        assertEquals(maxProduct([-4,-3]), 12);
        assertEquals(maxProduct([2,3,-2,4]), 6);
        assertEquals(maxProduct([-2,0,-1]),0);
        assertEquals(maxProduct([-4,-3,-2,-1]),24);
        assertEquals(maxProduct([-2,3,-4]),24);
        assertEquals(maxProduct([2,-5,-2,-4,3]),24);
        assertEquals(maxProduct([0,2]),2);
        assertEquals(maxProduct([3,-1,4]),4);
        assertEquals(maxProduct([-2]),-2);
    },
});
