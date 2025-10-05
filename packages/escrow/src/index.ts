export type EscrowState = 'initiated' | 'paid_hold' | 'seller_accepts' | 'in_transit' | 'delivered' | 'buyer_confirms' | 'released' | 'disputed';
export function nextState(current: EscrowState, event: string): EscrowState {
  const transitions: Record<EscrowState, Record<string, EscrowState>> = {
    initiated: { PAID: 'paid_hold' },
    paid_hold: { SELLER_ACCEPTS: 'seller_accepts', DISPUTE: 'disputed' },
    seller_accepts: { SHIP: 'in_transit', DISPUTE: 'disputed' },
    in_transit: { DELIVER: 'delivered', DISPUTE: 'disputed' },
    delivered: { CONFIRM: 'buyer_confirms', DISPUTE: 'disputed' },
    buyer_confirms: { RELEASE: 'released' },
    released: {},
    disputed: {}
  };
  return transitions[current]?.[event] ?? current;
}
