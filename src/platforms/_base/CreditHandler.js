class CreditHandler {
  constructor({ userRepository, user }) {
    this.user = user;
    this.userRepository = userRepository;
  }

  verifyIfUserHasCredit() {
    throw new NotImplementedException(this.verifyIfUserHasCredit.name);
  }

  updateCredit() {
    throw new NotImplementedException(this.updateCredit.name);
  }

  addCredit(amount) {
    throw new NotImplementedException(this.addCredit.name);
  }
}

export default CreditHandler;
