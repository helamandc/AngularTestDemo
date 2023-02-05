import { CalculateComponent } from './calculate.component';
describe('Calculate result', () => {
    let component: CalculateComponent;
beforeEach(() => {
    component = new CalculateComponent;
})
it('should display result as 50 when two numbers are added', () => {
component.sum();
expect(component.result).toBe(50);
})

it('should display result as 600 when two numbers are multiplied', () => {
component.multiply();
expect(component.result).toBe(600);
})

it('should display result as -10 when two numbers are subtracted', () => {
component.subtract();
expect(component.result).toBe(-10);
})

it('should display result as 2 when two numbers are divided.', () => {
component.firstNumber = 20;
component.secondNumber = 10;
component.divide();
expect(component.result).toBe(2);
})

})