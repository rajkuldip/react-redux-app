import React, { FC } from 'react';
import { Router as ReactRouter } from 'react-router-dom';

import history from './history';

export const Router: FC = ({ children }) => (
    <ReactRouter history={history}>{children}</ReactRouter>
);
