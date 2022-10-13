import { jest, expect, describe, it } from '@jest/globals';
import WhatsappCreditHandler from './../../../../src/platforms/whatsapp/credit';

const find = jest.fn();

const userRepository = {
  find,
  add: jest.fn(),
  remove: jest.fn(),
};

describe('Platform [WhatsappCreditHandler] CreditHandler Suite Test', () => {
  it('verifyIfUserHasCredit should return a valid boolean value', () => {
    find.mockReturnValue(2);

    const creditHandler = new WhatsappCreditHandler({
      userRepository: userRepository,
      user: { id: 1 },
    });

    expect(() => creditHandler.verifyIfUserHasCredit()).not.toThrow();
    expect(() => creditHandler.verifyIfUserHasCredit()).toBeTruthy();
  });

  it('updateCredit should be called to update the user credits', () => {
    const creditHandler = new WhatsappCreditHandler({
      userRepository: userRepository,
      user: { id: 1 },
    });

    expect(() => creditHandler.updateCredit()).not.toThrow();
    expect(userRepository.remove).toBeCalled();
  });

  it('addCredit should be called to update the user credits', () => {
    const creditHandler = new WhatsappCreditHandler({
      userRepository: userRepository,
      user: { id: 1 },
    });

    expect(() => creditHandler.addCredit(10)).not.toThrow();
    expect(userRepository.add).toBeCalled();
  });
});
