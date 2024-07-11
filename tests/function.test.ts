describe('Function', () => {
    it('should support function in typescript', () => {
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        }

        expect(sayHello('Asep')).toBe('Hello Asep');

        const printHello = (name: string): void => {
            console.info(`Hello ${name}`);
        }

        printHello('Asep');

    })

    it('should support default value', () => {
        const sayHello = (name: string = 'Guest'): string => {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe('Hello Guest');

    })

    it('should support rest parameter', () => {
        const sum = (...values: number[]): number => {
            let total = 0;

            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);

    })

    it('should support function overloading', () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value:any) {
            if (typeof value === 'string') {
                return `Hello ${value}`;
            } else if (typeof value === 'number') {
                return value * 2;
            }
        }

        expect(callMe(2)).toBe(4);
        expect(callMe('Asep')).toBe('Hello Asep');
    })

    it('should support function as parameter', () => {
        const sayHello = (name: string, filter: (name: string) => string): string => {
            return `Hello ${filter(name)}`;
        }

        const toUper = (name: string):string => {
            return name.toUpperCase();
        }

        expect(sayHello('Adam', toUper)).toBe('Hello ADAM');
    })
})