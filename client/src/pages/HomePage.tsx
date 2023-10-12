import styles from './HomePage.module.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className="title">
        <h1>Catch Phrase</h1>
        <h3>A cheeky party game that humors your f**cking brain power</h3>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          color="black"
          onClick={() => console.log('Black Button clicked')}
        >
          Start a game
        </Button>
        <div className={styles.buttonGap} />
        <Button
          color="white"
          onClick={() => console.log('White Button clicked')}
        >
          Join a game
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
