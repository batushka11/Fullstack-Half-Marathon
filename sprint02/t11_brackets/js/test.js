const assert = chai.assert;

describe('checkBrackets function', () => {
    it('should return -1 for an empty string', () => {
        assert.strictEqual(checkBrackets(''), -1);
    });

    it('should return -1 if input is not a string', () => {
        assert.strictEqual(checkBrackets(123), -1);
        assert.strictEqual(checkBrackets(null), -1);
        assert.strictEqual(checkBrackets(undefined), -1);
        assert.strictEqual(checkBrackets({}), -1);
        assert.strictEqual(checkBrackets([]), -1);
    });

    it('should return -1 if the string does not contain brackets', () => {
        assert.strictEqual(checkBrackets('no brackets'), -1);
    });

    it('should return the correct count of unmatched brackets', () => {
        assert.strictEqual(checkBrackets('(())'), 0);
        assert.strictEqual(checkBrackets('(()'), 1);
        assert.strictEqual(checkBrackets('())'), 1);
        assert.strictEqual(checkBrackets('(()())'), 0);
        assert.strictEqual(checkBrackets(')('), 2);
    });

    it('should handle nested brackets correctly', () => {
        assert.strictEqual(checkBrackets('((()))'), 0);
        assert.strictEqual(checkBrackets('(()(()))'), 0);
        assert.strictEqual(checkBrackets('((())'), 1);
        assert.strictEqual(checkBrackets('(()()))'), 1);
        assert.strictEqual(checkBrackets('(()()))'), 1);
    });
});