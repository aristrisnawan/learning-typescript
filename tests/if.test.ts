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
});
