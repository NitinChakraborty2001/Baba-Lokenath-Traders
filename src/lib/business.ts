// Central business facts for Baba Lokenath Traders.
// NOTE: phone number is a PLACEHOLDER — replace both values with the real number.
export const PHONE_DISPLAY = "+919432273708";
export const PHONE_TEL = "+919432273708";
export const WHATSAPP_NUMBER = "919432273708";

export const BUSINESS = {
  name: "Baba Lokenath Traders",
  owner: "Suman Saha",
  email: "blt.travels24@gmail.com",
  gbp: "https://g.co/kgs/uX1Pa9o",
  area: "Narayantala, Bansberia (Pin Code: 712502), Hooghly, West Bengal, India.",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
