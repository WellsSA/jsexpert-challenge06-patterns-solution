import UserCreditRepository from '../repository/userCreditRepository';
import database from '../shared/database';
import MessageSenderFacade from '../platforms/messageSenderFacade';

class MessageSenderFactory {
  static async createInstance({ user, platform, message }) {
    const { default: CreditHandler } = await import(
      `../platforms/${platform}/credit.js`
    );
    const { default: MessageSender } = await import(
      `../platforms/${platform}/sender.js`
    );

    const userCreditRepository = new UserCreditRepository({ db: database });

    const creditHandler = new CreditHandler({
      user: user,
      userRepository: userCreditRepository,
    });

    const messageHandler = new MessageSender({ message: message });

    const messageSenderFacade = new MessageSenderFacade({
      creditHandler,
      messageHandler,
    });

    return messageSenderFacade;
  }
}
export default MessageSenderFactory;
