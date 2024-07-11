describe("If", () => {
  it("should support if statement", () => {
    const value = 90;

    if (value > 80) {
      console.info("Good");
    } else if (value > 60) {
      console.info("Not bad");
    } else {
      console.info("Try again");
    }
  });

  it("should support ternary operator", () => {
    const value = 90;
    const say = value >= 75 ? "Congratulation" : "Try again";

    console.info(say);
  });
  it("should support switch statement", () => {
    const sayHello = (name: string): string => {
        switch (name) {
            case 'Asep':
                return `Hello Asep`;
            case 'Budo':
                return `Hello Budi`;
            default:
                return `Hello`;
        }
    }

    console.info(sayHello('Asep'));
  });
});
