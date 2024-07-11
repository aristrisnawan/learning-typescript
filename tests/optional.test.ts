describe('Optional parameter', () => {
    it('should support in typescript', () => {
        const sayHello = (name?: string | null) => {
            if (name) {
                console.info(`Hello, ${name}`)
            }
            console.info('Hello')
        }

        sayHello('Aris')
        const name: string | undefined = undefined
        sayHello(name)
        sayHello(null)
    })
})