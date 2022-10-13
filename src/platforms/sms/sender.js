import MessageHandler from '../_base/MessageHandler';

class SMSHandler extends MessageHandler {
  send() {
    const { from, to, subject, text } = this.message;
    console.log(
      `message from: <${from}> to: <${to}>sending sms: ${subject} ${text}`
    );

    return true;
  }
}

export default SMSHandler;
