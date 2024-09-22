import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from './context/AuthContext.jsx';
import { Provider } from 'react-redux';
import store, { persistor } from './store.js'
import { PersistGate } from 'redux-persist/integration/react';

// import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={ persistor}>
			<Router>
				<NextUIProvider>
					<AuthProvider>
						<App />
					</AuthProvider>
				</NextUIProvider>
			</Router>
		</PersistGate>
			
	</Provider>
);
