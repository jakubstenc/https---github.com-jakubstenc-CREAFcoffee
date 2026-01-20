import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { getTab, createTab, addCoffee, clearTab } from '../utils/tabStorage'
import { PRICE_PER_COFFEE, generatePaymentUrl, formatCurrency } from '../utils/payment'

function TabManager({ goHome }) {
    const [tab, setTab] = useState(null)
    const [usernameInput, setUsernameInput] = useState('')
    const [showPay, setShowPay] = useState(false)

    useEffect(() => {
        setTab(getTab())
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        if (usernameInput.trim()) {
            setTab(createTab(usernameInput.trim()))
        }
    }

    const handleAddCoffee = () => {
        const updated = addCoffee()
        setTab(updated)
    }

    const handleSettleStart = () => {
        if (tab.coffees > 0) {
            setShowPay(true)
        }
    }

    const handleSettleComplete = () => {
        clearTab()
        setTab(getTab()) // Refresh to show 0
        setShowPay(false)
    }

    if (!tab) {
        return (
            <div className="tab-login">
                <h2>My Tab</h2>
                <div className="card">
                    <p>Enter your name to start a tab on this device.</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <button type="submit" style={{ marginTop: '1rem', width: '100%' }}>Start Tab</button>
                    </form>
                </div>
                <button onClick={goHome} style={{ background: 'transparent', color: 'var(--color-text)', marginTop: '2rem' }}>Back Home</button>
            </div>
        )
    }

    if (showPay) {
        const amount = tab.coffees * PRICE_PER_COFFEE
        const paymentUrl = generatePaymentUrl(amount)

        return (
            <div className="tab-pay">
                <h2>Settle Up</h2>
                <div className="card">
                    <p>Paying for {tab.coffees} coffees</p>
                    <h3>{formatCurrency(amount)}</h3>
                    <div style={{ background: 'white', padding: '1rem', margin: '1rem 0', borderRadius: '8px' }}>
                        <QRCodeSVG value={paymentUrl} size={200} />
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#666' }}>Scan to pay</p>

                    <button onClick={handleSettleComplete} style={{ marginTop: '1rem', width: '100%', backgroundColor: '#4caf50' }}>
                        I have paid
                    </button>
                    <button onClick={() => setShowPay(false)} style={{ marginTop: '1rem', width: '100%', backgroundColor: 'transparent', color: '#666', boxShadow: 'none' }}>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="tab-dashboard">
            <h2>Hello, {tab.username}</h2>

            <div className="card">
                <p>Unpaid Coffees</p>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-coffee-dark)' }}>
                    {tab.coffees}
                </div>
                <p>You owe: <strong>{formatCurrency(tab.coffees * PRICE_PER_COFFEE)}</strong></p>
            </div>

            <button
                onClick={handleAddCoffee}
                style={{ width: '100%', marginBottom: '1rem', padding: '1.5rem', fontSize: '1.2rem' }}
            >
                + Add Coffee
            </button>

            <button
                onClick={handleSettleStart}
                disabled={tab.coffees === 0}
                style={{
                    width: '100%',
                    backgroundColor: tab.coffees === 0 ? '#ccc' : 'var(--color-coffee-light)',
                    cursor: tab.coffees === 0 ? 'not-allowed' : 'pointer'
                }}
            >
                Settle Up
            </button>

            <div style={{ marginTop: '2rem' }}>
                <button onClick={goHome} style={{ background: 'transparent', color: 'var(--color-text)' }}>Back Home</button>
            </div>
        </div>
    )
}

export default TabManager
