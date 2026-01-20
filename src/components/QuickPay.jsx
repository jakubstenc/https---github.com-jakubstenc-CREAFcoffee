import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { PRICE_PER_COFFEE, generatePaymentUrl, formatCurrency } from '../utils/payment'

function QuickPay({ goHome }) {
    const [count, setCount] = useState(1)

    const increment = () => setCount(c => c + 1)
    const decrement = () => setCount(c => Math.max(1, c - 1))

    const total = count * PRICE_PER_COFFEE
    const paymentUrl = generatePaymentUrl(total)

    return (
        <div className="quick-pay">
            <h2>Quick Pay</h2>

            <div className="card">
                <h3>How many coffees?</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
                    <button onClick={decrement}>-</button>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{count}</span>
                    <button onClick={increment}>+</button>
                </div>

                <p>Total: <strong>{formatCurrency(total)}</strong></p>
            </div>

            <div className="card" style={{ background: 'white', padding: '1rem', display: 'inline-block' }}>
                <QRCodeSVG value={paymentUrl} size={200} />
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: '#666' }}>
                    Scan to pay with Revolut
                </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <button onClick={goHome} style={{ backgroundColor: 'var(--color-coffee-light)' }}>
                    Back Home
                </button>
            </div>
        </div>
    )
}

export default QuickPay
