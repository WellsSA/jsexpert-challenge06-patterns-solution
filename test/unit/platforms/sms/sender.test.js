import { expect, describe, it } from '@jest/globals';
import SMSMessageHandler from './../../../../src/platforms/sms/sender';
import validMessage from '../../../mocks/valid-message';

describe('Platform [SMS] MessageHandler Suite Test', () => {
  it('send should be called and return a success value if the SMS was sent', () => {
    const messageHandler = new SMSMessageHandler({
      message: validMessage,
    });

    expect(() => messageHandler.send()).toBeTruthy();
  });
});
