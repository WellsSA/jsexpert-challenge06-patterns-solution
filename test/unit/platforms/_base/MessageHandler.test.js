import MessageHandler from './../../../../src/platforms/_base/MessageHandler';

describe('Platform [Base] CreditHandler Suite Test', () => {
  it('send should throw a NonImplementedException if called', () => {
    const messageHandler = new MessageHandler({
      message: {},
    });

    expect(() => messageHandler.send()).toThrow();
  });
});
