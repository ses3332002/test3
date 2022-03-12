import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './Welcome.css';

export function Welcome() {
  return (
    <main>
      <h1>Welcome to Users test project</h1>
      version: {process.env.REACT_APP_VERSION}
      <Link to="/users">
        <Button>Start</Button>
      </Link>
    </main>
  );
}
