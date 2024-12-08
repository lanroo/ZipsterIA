export class SessionHandler {
    private session: any;
  
    constructor() {
      this.session = null;
    }
  
    saveSession(session: any): void {
      this.session = session;
      console.log('Session saved:', session);
    }
  
    loadSession(): any {
      return this.session;
    }
  }
  