import React from 'react';
import { Flexy, Theme } from './style';

export const UITheme = () => (
    <Flexy>
        <Theme tone={"light"} />
        <Theme tone={"dark"} />
        <Theme tone={"oled"} />
    </Flexy>
)

