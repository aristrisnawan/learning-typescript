describe('Any', () => {
    it("should support with typescript", () => {
        const person: any = {
            id: 1,
            name: 'Aris Trisnawan',
            age: 25,
        }

        person.address = 'Jakarta'

        console.info(person)
    })
})