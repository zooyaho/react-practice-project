import ReactDOM from 'react-dom'; // 서드 파티 라이브러리라 확장자 생략 가능

import './index.css';
import App from './App'; // .js확장자라 생략 가능

ReactDOM.render(<App />, document.getElementById('root'));
// 루트 컴포넌트(<App />)를 위해 한번만 rendering함.