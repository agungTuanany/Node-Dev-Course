const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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
        expect(typeof message.createdAt).toBe('string')
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'localServer@localhost.com';
        let latitude = -132;
        let longitude = 6552;
        let url = 'https://www.google.com/maps?q=-132,6552';
        let message = generateLocationMessage(from, latitude, longitude);

        expect(message).toMatchObject({from, url});
        expect(typeof message.createdAt).toBe('string');
    });
});