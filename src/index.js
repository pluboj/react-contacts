import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactReducer from './reducers/contact';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	ContactReducer,
	window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
