const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'localServer@localhost.com';
        let text = 'Message test from generateMessage';
        // let message = generateMessage(from, text);

        expect((res) => {
            expect(generateMessage.from).toBe(from)
            expect(generateMessage.text).toBe(text)
            expect(typeof generateMessage.createdAt).toBe('number')
        })
    });

    it('should generate correct message object', () => {
        let from = 'localServer@localhost.com';
        let text = 'Message test from generateMessage';
        let message = generateMessage(from, text);

        expect(message).toMatchObject({from, text})
        expect(typeof message.createdAt).toBe('number')
    });
});