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
    store.indicatorPosition = document.getElementById(id).getBoundingClientRect().top-72+10;

    const section = store.sections.find(o => o.id == id.split("tab-")[1]);

    document.getElementById("mount-view-scroller").scrollTop = section.scrollPos;

    section.element.children[0].style.fontWeight = 500;
    

    setTimeout(() => {
        section.element.children[0].style.fontWeight = null;
    }, 400);
}

export const SidebarItem = observer(({ icon, text, selected, visible, isUser, bottom }: Props) => {
    let id = "tab-" + text.replace(/ /g, "-").toLowerCase()
    
    if(text.toLowerCase() == store.session.username.toLowerCase()) id = "tab-id"

    return (
        <StyledSidebarItem visible={visible} onClick={() => onClick(id)} id={id} data-name={text} isBottom={bottom}>
            <Icon icon={icon} style={{ borderRadius: isUser ? '50px' : '0', opacity: isUser ? 1 : 0.8, border: isUser ? '1px solid rgba(50, 50, 50, 0.5)' : '' }} />
            <Name>{text}</Name>
        </StyledSidebarItem>
    )
})