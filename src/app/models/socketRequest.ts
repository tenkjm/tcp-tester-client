export class SocketRequest {
  id: number;
  name: string;
  content: string;
  address: string;
  port: number;
  constructor(id: number, name: string, content: string,
    address: string, port: number) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.address = address;
    this.port = port;
  }
}
