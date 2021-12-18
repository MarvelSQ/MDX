import ReactDOM from 'react-dom';
import Main from './MDX/main.mdx';
import Editor from './components/Editor';

ReactDOM.render(
  <>
    <h1 className="page-title">Hello, world!</h1>
    <Main components={{ Editor }} />
  </>,
  document.getElementById('root')
);
