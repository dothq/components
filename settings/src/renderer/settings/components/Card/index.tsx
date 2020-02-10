import * as React from 'react';
import { observer } from "mobx-react";
import { StyledCard, Value } from './style';
import { Item } from '../../constants/items';

import ReactShadowRoot from 'react-shadow-root';

interface Props {
    children: any;
    mount?: Item;
    isFinal?: boolean;
    isMiddle?: boolean;
    isFirst?: boolean;
}

export const Card = observer(({ children, mount, isFinal, isMiddle, isFirst }: Props) => {
    if(mount.type == "custom") return (
        <StyledCard style={{ borderRadius: isFinal ? '0 0 5px 5px' : isFirst ? '5px' : isMiddle ? '5px 5px 0 0' : '0' }}>
            {mount.hideName == true ? ( <></> ) : ( <><Value>{mount.name}</Value><br /></> )}
            {mount.sandbox == true ? (
                <ReactShadowRoot>
                    <mount.component />
                </ReactShadowRoot>
            ) : <mount.component />}
        </StyledCard>
        
    );

    return (
        <StyledCard style={{ borderRadius: isFinal ? '0 0 5px 5px' : isMiddle ? '5px 5px 0 0' : '0' }}>
            {mount.hideName == true ? ( <></> ) : ( <Value>{mount.name}</Value> )}
        </StyledCard>
    )
})
