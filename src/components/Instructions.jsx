function Instructions({ goHome }) {
    return (
        <div className="instructions">
            <h2>How to use</h2>

            <div className="card" style={{ textAlign: 'left' }}>
                <h3>Option 1: Quick Pay</h3>
                <p>
                    Just want a coffee now? Click "Pay Now", select the number of cups, and scan the QR code with your banking app or Revolut.
                </p>
            </div>

            <div className="card" style={{ textAlign: 'left' }}>
                <h3>Option 2: My Tab (Recommended)</h3>
                <p>
                    Regular drinker? Create a tab with your name.
                    <br /><br />
                    1. Go to "My Tab" and enter a username.
                    <br />
                    2. Every time you take a coffee, tap "+ Add Coffee".
                    <br />
                    3. When your debt gets high (or you feel guilty), tap "Settle Up" to pay for everything at once.
                </p>
                <p style={{ fontSize: '0.9em', fontStyle: 'italic', color: '#666' }}>
                    *Note: Your tab is stored on this phone. If you change devices, you'll start a new tab.
                </p>
            </div>

            <div className="card">
                <h3>Pricing</h3>
                <p><strong>0.50 €</strong> per coffee</p>
                <p>Please pay promptly to keep the machine running!</p>
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <button onClick={goHome}>Back Home</button>
            </div>
        </div>
    )
}

export default Instructions
