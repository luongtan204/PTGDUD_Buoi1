import React, { useState, useReducer, useEffect, memo, useMemo, useCallback } from 'react';
import './App.css';

// Câu 1: useState - Ứng dụng đếm số
function CounterUseState() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h2>useState Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Câu 2: useReducer - Ứng dụng đếm số
const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE': return state + 1;
    case 'DECREASE': return state - 1;
    case 'RESET': return 0;
    default: return state;
  }
}
function CounterUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter">
      <h2>useReducer Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Tăng</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Giảm</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

// Câu 3: useEffect - Lấy dữ liệu từ API
function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10))); // Lấy 10 bài viết đầu tiên
  }, []);
  return (
    <div className="posts">
      <h2>Danh sách bài viết</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

// Câu 4: Performance
// a. React.memo
const MemoComponent = memo(({ value }) => {
  console.log("Rendered MemoComponent");
  return <p>{value}</p>;
});

// b. useMemo
function UseMemoExample({ num }) {
  const squared = useMemo(() => {
    console.log("Calculating square");
    return num * num;
  }, [num]);
  return <p>Square: {squared}</p>;
}

// c. useCallback
function UseCallbackExample() {
  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);
  return <button onClick={handleClick}>Click Me</button>;
}

// Câu 5: Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return { count, increment, decrement, reset };
}

function CounterWithHook() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div className="counter">
      <h2>Custom Hook Counter</h2>
      <p>{count}</p>
      <button onClick={increment}>Tăng</button>
      <button onClick={decrement}>Giảm</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <CounterUseState />
      <CounterUseReducer />
      <PostList />
      <MemoComponent value="Hello Memo!" />
      <UseMemoExample num={5} />
      <UseCallbackExample />
      <CounterWithHook />
    </div>
  );
}

export default App;
