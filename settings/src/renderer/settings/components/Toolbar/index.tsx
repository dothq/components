import React from 'react';
import { observer } from "mobx-react";
import { StyledToolbar, Title, Container, SearchContainer, AvatarContainer, AvatarIcon } from "./style";
import { Search } from '../Search';
import { icons } from '../../constants/icons';

export const Toolbar = observer(() => (
    <StyledToolbar>
        <Container>
            <Title>Settings</Title>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <AvatarContainer>
                <AvatarIcon icon={icons.defaultAvatar} />
            </AvatarContainer>
        </Container>
    </StyledToolbar>
))