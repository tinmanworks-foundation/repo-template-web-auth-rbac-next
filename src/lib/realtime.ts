export interface RealtimeClient {
  connect(channel: string): Promise<void>;
  disconnect(): Promise<void>;
}

export class StubRealtimeClient implements RealtimeClient {
  async connect(_channel: string): Promise<void> {
    void _channel;
    return;
  }
  async disconnect(): Promise<void> {
    return;
  }
}
