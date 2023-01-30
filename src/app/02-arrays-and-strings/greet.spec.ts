import { greet } from "./greet"

describe('Greet', () => {
    it('should display the correct name',() => {
        var greetings = greet('Helaman');
        expect(greetings).toContain('Helaman');
    })
})