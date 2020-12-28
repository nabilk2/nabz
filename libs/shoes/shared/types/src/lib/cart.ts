export interface Cart {
  sessionId: string;
  shoes: { shoeId: string; quantity: number }[];
}
