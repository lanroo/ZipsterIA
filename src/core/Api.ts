import { CoreClient } from './CoreClient';
import { Logger } from '../util/Logger';

export class Api {
  private client: CoreClient;
  private logger: Logger;

  constructor() {
    this.client = new CoreClient();
    this.logger = new Logger();
  }

  async connect(): Promise<void> {
    this.logger.log('Connecting to WhatsApp...');
    this.client.on('qr', (qr: string) => {
      this.logger.log('QR Code generated. Scan it with WhatsApp!');
      console.log(qr); 
    });

    this.client.on('ready', () => {
      this.logger.log('WhatsApp connected!');
    });

    await this.client.connect();
  }

  async sendMessage(to: string, message: string): Promise<void> {
    this.logger.log(`Sending message to ${to}`);
    await this.client.sendMessage(to, message);
  }
}
