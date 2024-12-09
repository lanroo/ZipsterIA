
# **ZipsterIA**

**ZipsterIA** is a modern and powerful library developed in **TypeScript** for automating and integrating with WhatsApp Web. Inspired by best practices, it enables you to create intelligent bots and interact programmatically with WhatsApp.

With ZipsterIA, you can send messages, manage groups, send media, and customize automatic responses, all with security and flexibility.

---

## **About**

ZipsterIA works by connecting to WhatsApp Web using **Puppeteer**, a browser automation tool for Chrome-like browsers. It simulates a browser interacting with WhatsApp Web, enabling near-total automation.

The use of **TypeScript** in ZipsterIA ensures safer and more efficient development with native support for autocompletion, type checking, and best practices.

⚠️ **Important:** While this library minimizes risks, WhatsApp does not officially support bots or unofficial clients. There are no guarantees that your account will not be blocked while using this method.

---

## **Features**

| Feature                                   | Status             |
|------------------------------------------|--------------------|
| Multi-device                             | ✅                |
| Send messages                            | ✅                |
| Receive messages                         | ✅                |
| Send media (images, audio, documents)    | ✅                |
| Manage groups                            | ✅                |
| Persistent session                       | ✅                |

---

## **Installation**

Make sure you have **Node.js (v18+)** installed. To install the library:

```bash
npm install zipsteria
```

---

## **Basic Usage**

Here’s a simple example of how to use **ZipsterIA** with **TypeScript**:

```typescript
import { CoreClient } from 'zipsteria';

const client = new CoreClient();

client.on('qr', (qr) => {
    console.log('QR Code generated. Scan it with WhatsApp!');
});

client.on('ready', () => {
    console.log('WhatsApp connected!');
});

client.on('message', (message) => {
    console.log(`Message received: ${message.body}`);
    if (message.body === '!ping') {
        message.reply('pong');
    }
});

// Initialize the client
(async () => {
    await client.connect();
})();
```

---

## **Requirements**

- **Node.js v18+**
- **Google Chrome** (recommended for video sending and better compatibility).

### How to Update Node.js:

#### Windows:
```bash
choco install nodejs-lts
```

#### Linux (Debian/Ubuntu):
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

## **Advanced Features**

1. **Persistent Authentication**:
   Save your session to avoid scanning the QR Code every time you restart the bot.
   ```typescript
   client.on('authenticated', (session) => {
       console.log('Session authenticated:', session);
       // Save the session in a file or database
   });
   ```

2. **Send Media**:
   ```typescript
   client.sendMessage('552199999999@c.us', {
       content: 'Hello, this is a message with media!',
       media: './path/to/image.jpg',
   });
   ```

3. **Group Management**:
   Add or remove participants:
   ```typescript
   await client.addParticipant('group-id@c.us', 'participant-id@c.us');
   await client.removeParticipant('group-id@c.us', 'participant-id@c.us');
   ```

---

## **Contributing**

Contributions are always welcome! 🛠️

If you’d like to suggest a feature or fix an issue, please follow these steps:

1. **Fork** this repository.
2. Create a new branch:
   ```bash
   git checkout -b my-contribution
   ```
3. Make your changes and submit a **pull request**.

### Contribution Guidelines:
- Ensure your code follows TypeScript standards.
- Add tests for any new functionality.
- Document your changes in the `README.md`.

---

## **Community Support**

If you have ideas or would like to discuss features, please join the discussions tab or open an issue.

For support, feel free to contact me through GitHub: [lanroo](https://github.com/lanroo).

---

## **Disclaimer**

This project **is not affiliated, associated, or endorsed by WhatsApp Inc.** or any of its subsidiaries. All names, marks, and images related to WhatsApp are property of their respective owners.

⚠️ **Note:** Using this library may result in your account being banned from WhatsApp. Use responsibly.

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
