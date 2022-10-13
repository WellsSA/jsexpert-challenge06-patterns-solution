import MessageService from '../../../src/service/messageService';
import MessageMotherObject from '../model/MessageMotherObject';

import { jest, expect, describe, it } from '@jest/globals';

const messageSender = {
  sendMessage: jest.fn(),
};

const messageFactory = {
  createInstance: jest.fn(),
};

const messageService = new MessageService({ messageFactory });

describe('MessageService Suite Test', () => {
  it('sendMessage method should instanciate a messageFactory and call factory.sendMessage', () => {
    messageFactory.createInstance.mockReturnValue(messageSender);

    messageService.sendMessage({
      platform: 'email',
      message: MessageMotherObject.valid(),
      user: { id: 1 },
    });

    expect(messageFactory.createInstance).toBeCalled();
    expect(messageSender.sendMessage).toBeCalled();
  });
});
