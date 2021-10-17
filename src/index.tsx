import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import configureStore from './app/store';
import { Provider } from 'react-redux';
import { Router } from './core/router';
import { Route } from 'react-router-dom';
import { routes } from './routes';
import { Footer } from './modules/Footer';
import styled from 'styled-components';


const MainContainer = styled.div`
    min-height: 80%;
    padding-bottom: 100px;
`;

const store = configureStore();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainContainer>
                <Router>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                    >
                        <route.component />
                    </Route>
                ))}
                </Router>
            </MainContainer>
            <Footer />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
