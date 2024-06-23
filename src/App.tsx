import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglYENp1HMExjOU0WD_GZPWPlArj64Vx19sw&s'
            }
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>موقع مياة نقي</h1>
      <div className="card">
        <button>
          <a href="#">الذهاب للموقع</a>
        </button>
        <p>حلي مويتك مع نقي</p>
      </div>
      <p className="read-the-docs">جميع الحقوق محفوظة </p>
    </>
  );
}

export default App;
