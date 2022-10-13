import MessageSenderFactory from './factory/messageSenderFactory';

// Imagina que essa é uma API falsa
class API {
  // Aqui nosso endpoint
  async sendMessage(platform, message) {
    // usuário logado
    const user = { id: 1 };

    const service = new MessageService({
      messageSenderFactory: MessageSenderFactory,
    });

    const result = await service.sendMessage({ user, platform, message });

    return result;
  }
}

export default API;
