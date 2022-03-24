import './App.css'

function App() {

  const createNums = () => {
    const digits = [];

    for(let i = 1; i < 10; i++){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits;
  }

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <span>0</span>
        </div>

        <div className="operators">
            <button>+</button>
            <button>-</button>
            <button>/</button>
            <button>*</button>
            <button>DEL</button>
        </div>

        <div className="numbers">
          { createNums() }
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
