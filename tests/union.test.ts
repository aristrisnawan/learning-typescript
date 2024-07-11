describe('Union Type', () => {
    it("should support in typescript", () => {
        let sample: number | string | boolean = 'Aris'
        sample = 25
        sample = true

        console.info(sample)
    })
})