import { Compute } from "./compute"

describe('Compute', () => {
    //first test path
    it('should return 0 if the number is negative.', () => {
        const result = Compute(-1);
        expect(result).toBe(0);
    })
    //second test path
    it('should increment the number if it is positive', () => {
        const result = Compute(1);
        expect(result).toBe(2);
    })

})