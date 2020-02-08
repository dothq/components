import React from 'react';
import { observer } from "mobx-react";
import { StyledSidebarItem, Icon, Name } from "./style";

interface Props {
    icon: any,
    text: any,
    selected: boolean,
    visible: boolean,
    key: number
}

export const SidebarItem = observer(({ icon, text, selected, visible }: Props) => (
    <StyledSidebarItem visible={visible}>
        <Icon icon={icon} />
        <Name>{text}</Name>
    </StyledSidebarItem>
))