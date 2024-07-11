describe('Object', () => {
    it('should support in typescript', () => {
        const person: {id: number, name: string, address?: string} = {
            id: 1,
            name: 'Aris'
        }

        console.info(person)
    })
})