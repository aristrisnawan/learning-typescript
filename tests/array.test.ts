describe('Array', () => {
    it("should same with javascript", () => {
        const names: string[] = ['Aris', 'Trisnawan']
        const balances: number[] = [1000000, 2000000]
        
        console.info(names)
        console.info(balances)
    })

    it("should support readonly array", () => {
        const hobbies: ReadonlyArray<string> = ['Coding', 'Reading']
        console.info(hobbies[0])
    })

    it("should support tuple", () => {
        const user: readonly [string, string, number] = ['Aris', 'Trisnawan', 25]
        console.info(user[0])
        console.info(user[1])
    })
})