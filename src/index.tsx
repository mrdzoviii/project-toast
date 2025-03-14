import  {createRoot} from 'react-dom/client';

import './global-styles.css';
import App from 'components/App';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(<App />);
