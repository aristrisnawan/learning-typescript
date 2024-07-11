import { sayHello } from '../src/say-hello';

describe('sayHello', function (){
    it("should return hello aris", function(){
       expect(sayHello('Aris')).toBe("Hello Aris");
    })
})