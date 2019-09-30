import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import SocialApp from './App';

ReactDOM.render(<SocialApp />, document.getElementById('root'));

serviceWorker.unregister();
