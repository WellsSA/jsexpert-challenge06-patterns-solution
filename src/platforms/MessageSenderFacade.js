import { SHIPPING_STATUSES } from '../shared/constants';

class MessageSenderFacade {
  MAX_RETRIES = 3;

  constructor({ messageHandler, creditHandler }) {
    this.messageHandler = messageHandler;
    this.creditHandler = creditHandler;
    this.retries = 0;
  }

  sendMessage() {
    const hasCredit = this.creditHandler.verifyIfUserHasCredit();
    if (!hasCredit) {
      return SHIPPING_STATUSES.NOT_ENOUGH_CREDIT;
    }

    do {
      try {
        if (this.messageHandler.send()) {
          this.creditHandler.updateCredit();
          return SHIPPING_STATUSES.SENT;
        }

        this.retries += 1;
      } catch (error) {
        this.retries += 1;
      }
    } while (this.retries < this.MAX_RETRIES);
    return SHIPPING_STATUSES.FAILED;
  }

  addCredit(amount) {
    return this.creditHandler.addCredit(amount);
  }
}

export default MessageSenderFacade;
