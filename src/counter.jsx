// import { useState } from "react";

// function Counter(){
//     const [count,setCount] = useState("none");
//     const increment = () => setCount(count + 1);
//     const decrement = () => setCount(count - 1);
//     const reset = () => setCount(0);
//     return(
//         <>
//             <div className="counter-container">
//                 <p className="counter-display">{count}</p>
//                 <button onClick={increment}>increment</button>
//                 <button onClick={reset}>reset</button>
//                 <button onClick={decrement}>decrement</button>
//             </div>
//         </>
//     )
// }

// export default Counter;


import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); // Changed initial value from "none" to 0
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(0);

    const styles = {
        container: {
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 0 20px rgba(0, 255, 150, 0.3)',
            textAlign: 'center',
            margin: '2rem auto',
            maxWidth: '400px',
            transition: 'all 0.3s ease',
            border: '2px solid #00ff96'
        },
        display: {
            fontSize: '4rem',
            color: '#00ff96',
            margin: '1rem 0',
            textShadow: '0 0 10px rgba(0, 255, 150, 0.5)',
            fontFamily: '"Courier New", monospace',
            transition: 'all 0.3s ease'
        },
        button: {
            padding: '0.8rem 1.5rem',
            margin: '0.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease, transform 0.1s ease',
            letterSpacing: '1px'
        },
        increment: {
            backgroundColor: '#00ff96',
            color: '#1a1a1a'
        },
        reset: {
            backgroundColor: '#ff6b6b',
            color: 'white'
        },
        decrement: {
            backgroundColor: '#ffd700',
            color: '#1a1a1a'
        }
    };

    return (
        <div 
            className="counter-container" 
            style={styles.container}
            onMouseEnter={() => {
                document.querySelector('.counter-container').style.transform = 'scale(1.02)';
            }}
            onMouseLeave={() => {
                document.querySelector('.counter-container').style.transform = 'scale(1)';
            }}
        >
            <span className="item">
                Pravin Tanpure
            </span>
            <p 
                className="counter-display" 
                style={{
                    ...styles.display,
                    color: count === 0 ? '#ff6b6b' : styles.display.color,
                    transform: `scale(${1 + Math.abs(count) * 0.02})`
                }}
            >
                {count}
            </p>
            <button 
                onClick={increment}
                style={{ ...styles.button, ...styles.increment }}
                onMouseOver={e => {
                    e.currentTarget.style.filter = 'brightness(1.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.filter = 'brightness(1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Increment ➕
            </button>
            <button 
                onClick={reset}
                style={{ ...styles.button, ...styles.reset }}
                onMouseOver={e => {
                    e.currentTarget.style.transform = 'rotate(5deg) scale(1.1)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
            >
                Reset 🔄
            </button>
            <button 
                onClick={decrement}
                style={{ ...styles.button, ...styles.decrement }}
                onMouseOver={e => {
                    e.currentTarget.style.filter = 'brightness(1.2)';
                    e.currentTarget.style.transform = 'translateY(2px)';
                }}
                onMouseOut={e => {
                    e.currentTarget.style.filter = 'brightness(1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }}
            >
                Decrement ➖
            </button>
            
        </div>
    );
    // console.log(typeof styles);
}

export default Counter;