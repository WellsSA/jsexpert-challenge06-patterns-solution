import CreditHandler from '../_base/CreditHandler';

class WhatsappCreditHandler extends CreditHandler {
  verifyIfUserHasCredit() {
    return this.userRepository.find(this.userId, 'whatsapp') > 0;
  }

  updateCredit() {
    this.userRepository.remove(this.userId, 'whatsapp');
  }

  addCredit(amount) {
    this.userRepository.add(this.userId, 'whatsapp', amount);
  }
}

export default WhatsappCreditHandler;
