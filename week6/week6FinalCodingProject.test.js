var expect = chai.expect;


describe ('removeCard()', () => {
    let testHand = ['AH', '2H', '3H', '4H', '5H', '6H'];
    it ('reduces the number of cards in hand', () => {
        let inputLength = testHand.length;
        testHand = removeCard(testHand);
        let expectedLength = inputLength - 1;
        let outputLength = testHand.length;
        expect(outputLength).to.equal(expectedLength);
    });
    it('remove the last element', () => {
        testHand = removeCard(testHand);
        let expectedOutput = testHand.slice(0, testHand.length-2);
        expect(testHand).to.deep.equal(expectedOutput);
    })
})