export interface ChargeRequest { amount: number; currency: string; reference: string; email?: string; metadata?: Record<string, any>; }
export interface PaymentGateway {
  initCharge(req: ChargeRequest): Promise<{ authUrl?: string; reference: string }>;
  verify(reference: string): Promise<{ status: 'success' | 'failed'; amount: number; currency: string }>;
}
export class PaystackGateway implements PaymentGateway {
  constructor(private secret: string) {}
  async initCharge(req: ChargeRequest) { return { authUrl: 'https://paystack.test/redirect', reference: req.reference }; }
  async verify(reference: string) { return { status: 'success', amount: 0, currency: 'GHS' }; }
}
export class FlutterwaveGateway implements PaymentGateway {
  constructor(private secret: string) {}
  async initCharge(req: ChargeRequest) { return { authUrl: 'https://flutterwave.test/redirect', reference: req.reference }; }
  async verify(reference: string) { return { status: 'success', amount: 0, currency: 'GHS' }; }
}
