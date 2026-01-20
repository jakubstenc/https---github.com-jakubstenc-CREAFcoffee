function Home({ setView }) {
    return (
        <div className="home-screen">
            <h1>CREAF Coffee</h1>
            <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
                Fueling research, one cup at a time.
            </p>

            <div className="card">
                <button onClick={() => setView('quickpay')} style={{ width: '100%', marginBottom: '1rem' }}>
                    Pay Now
                </button>
                <button onClick={() => setView('tab')} style={{ width: '100%' }}>
                    My Tab
                </button>
            </div>

            <div style={{ marginTop: '2rem' }}>
                <button
                    onClick={() => setView('instructions')}
                    style={{ background: 'transparent', color: 'var(--color-coffee-medium)', textDecoration: 'underline', boxShadow: 'none' }}
                >
                    How does this work?
                </button>
            </div>
        </div>
    )
}

export default Home
