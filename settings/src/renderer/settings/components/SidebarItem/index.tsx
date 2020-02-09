import * as React from 'react';
import { observer } from "mobx-react";
import { StyledSidebarItem, Icon, Name } from "./style";
import store from '../../store';

interface Props {
    icon: any,
    text: any,
    selected: boolean,
    visible: boolean,
    isUser?: boolean,
    bottom?: boolean
    key?: number
}

const onClick = (id: string) => {
    store.selectedCategory = id;
    store.indicatorPosition = document.getElementById(id).getBoundingClientRect().top-72+10
}

export const SidebarItem = observer(({ icon, text, selected, visible, isUser, bottom }: Props) => {
    const id = "tab-" + text.replace(/ /g, "-").toLowerCase()
    
    return (
        <StyledSidebarItem visible={visible} onClick={() => onClick(id)} id={id} data-name={text} isBottom={bottom}>
            <Icon icon={icon} style={{ borderRadius: isUser ? '50px' : '0', opacity: isUser ? 1 : 0.8 }} />
            <Name>{text}</Name>
        </StyledSidebarItem>
    )
})