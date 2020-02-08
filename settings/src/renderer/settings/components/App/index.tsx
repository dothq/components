import React from 'react';
import { observer } from 'mobx-react';
import { StyledApp } from './style';
import 'glamor/reset';

import { Toolbar } from '../Toolbar';
import { icons } from '../../constants/icons';
import { Sidebar } from '../Sidebar';

const favicon = document.createElement("link");
favicon.setAttribute("type", "image/x-icon");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("href", icons.favicon);

document.head.appendChild(favicon);

export const App = observer(() => (
    <StyledApp>
        <Toolbar />
        <Sidebar />
    </StyledApp>
))