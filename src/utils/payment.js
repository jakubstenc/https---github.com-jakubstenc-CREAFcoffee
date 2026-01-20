export const PRICE_PER_COFFEE = 0.50; // EUR
export const CURRENCY = 'EUR';

export const generatePaymentUrl = (amount) => {
    // Placeholder Revolut link. In reality, Revolut links might not support auto-filling amount easily without API,
    // but we can try or use a generic payment string.
    // Alternative: SEPA QR code string (EPC069-1)

    // For now, using a payment link format that might be recognized or just a URL.
    // User asked for placeholder.
    return `https://revolut.me/CREAFcoffee_PLACEHOLDER?amount=${amount}&currency=${CURRENCY}`;
};

export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency: CURRENCY }).format(amount);
};
