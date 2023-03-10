type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

// type Concat<T, U> =
//     T extends unknown[] ?
//         U extends unknown[] ?
//             [...T, ...U]
//             : never
//         : never;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]
