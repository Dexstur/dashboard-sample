export class FetchError extends Error {
  status: number;
  response: any;

  constructor(status: number, message: string, response: any) {
    super(message);
    this.name = "FetchError";
    this.status = status;
    this.response = response;
  }
}
