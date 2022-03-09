var expect = chai.expect;

describe('MyFunction', function() {
    describe('#doSomthing', function() {
        it ('should concatenate the two patameters', function() {
            var x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });
        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                doSomething(5,5);
            }).to.throw(Error);
        });
    });
});