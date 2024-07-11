import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            address: 'Jakarta',
            nib: '123456',
            npwp: '1234567890'
        }

        seller.name = 'Toko Aris';
        console.info(seller)
    });

    it('should support function interface in typescript', () => {
       interface AddFunction {
        (val1: number, val2: number): number;
       }

       const add: AddFunction = (val1: number, val2: number) => {
           return val1 + val2;
       }
       expect(add(2,2)).toBe(4);
    });

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const name: StringArray = ['Aris', 'Tirta'];

        console.info(name[0]);
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: 'Arisss',
            address: 'Jakarta'
        }

        expect(dictionary['name']).toBe('Arisss');
        expect(dictionary['address']).toBe('Jakarta'); 
    });

    it('should support extends interface', () => {
       const employee: Employee = {
        id: '1',
        name: 'Aris',
        division: 'IT'
       }

       console.info(employee);

       const manager: Manager = {
        id: '2',
        name: 'Tirta',
        division: 'IT',
        numberOfEmployee: 10
       }

       console.info(manager);
    });

    it('should support function in interface', () => {

        const person: Person = {
            name: 'Ahmad',
            sayHello: (name: string): string => {
                return `Hello ${name} my name is ${person.name}`;
            }
        }

        console.info(person.sayHello('Mamat'));
     });

     it('should support intersection types', () => {
       interface HasName {
        name: string;
       }
       interface HasId {
        id: string;
       }

       type Domain = HasName & HasId;

       const domain: Domain = {
        id: '1',
        name: 'Gun Shop'
       }

       console.info(domain);
     });

     it('should support type assertions', () => {
        const person: any = {
            name: 'Ahmif',
            age: 30
        };

        const person2: Person = person as Person;
        console.info(person2);
      });
});