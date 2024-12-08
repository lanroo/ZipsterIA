import { CoreClient } from '../core/CoreClient';

export class MessageHandler {
  private client: CoreClient;

  constructor(client: CoreClient) {
    this.client = client;
  }

  async sendMessage(to: string, content: string): Promise<void> {
    await this.client.sendMessage(to, content);
  }

  async onMessage(callback: (message: any) => void): Promise<void> {
    this.client.on('message', callback);
  }
}
