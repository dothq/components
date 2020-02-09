import React from 'react';
import { observer } from "mobx-react";
import { StyledView, ViewContainer, ViewDisplay } from "./style";
import store from '../../store';

export const View = observer(() => (
    <StyledView isMenuToggled={store.isToggled}>
        <ViewContainer>
            <ViewDisplay>
            sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />sdfsadfasdfsdf<br />
            </ViewDisplay>
        </ViewContainer>
    </StyledView>
))