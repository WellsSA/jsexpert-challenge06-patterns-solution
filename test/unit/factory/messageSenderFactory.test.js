import { expect, describe, it } from '@jest/globals';
import MessageSenderFactory from '../../../src/factory/messageSenderFactory';
import EmailCreditHandler from '../../../src/platforms/email/credit';
import EmailMessageHandler from '../../../src/platforms/email/sender';
import validMessage from '../../mocks/valid-message';

const params = { user: { id: 1 }, message: validMessage };

describe('MessageSenderFactory Suite Test', () => {
  it('Should instanciate the MessageSenderFacade dependencies properly', async () => {
    const facade = await MessageSenderFactory.createInstance({
      ...params,
      platform: 'email',
    });

    expect(facade.creditHandler).toBeInstanceOf(EmailCreditHandler);
    expect(facade.messageHandler).toBeInstanceOf(EmailMessageHandler);
  });
});
