import React from 'react';
import { observer } from "mobx-react";
import { StyledView, ViewContainer, ViewDisplay, Spacer } from "./style";
import store from '../../store';
import { Card } from '../Card';
import { items } from '../../constants/items';
import { categories } from '../../constants/categories';
import { ID } from '../Categories/id';
import { Appearance } from '../Categories/appearance';

export const View = observer(() => (
    <StyledView isMenuToggled={store.isToggled}>
        <ViewContainer id="mount-view-scroller">
            <ViewDisplay id="mount-view">
                <ID />
                <Appearance />
            </ViewDisplay>
        </ViewContainer>
    </StyledView>
))

