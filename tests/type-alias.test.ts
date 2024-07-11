import { Category, Product } from "../src/type-alias"

describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id: 1,
            name: 'Electronics',
            description: 'Electronic Items'
        }

        const product: Product = {
            id: '2',
            name: 'Laptop',
            price: 2000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
})