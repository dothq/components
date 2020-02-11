import React from 'react';
import { Avatar, Value, InformationsContainer, Sync, Button, Buttons, Flexy } from './style';
import store from '../../store';
import { icons } from '../../constants/icons';
import { resolve } from 'path';
import * as ab from '~/shared/audio/afgbbaQuK2lAGMQ7gNHcGK6GPPMtcg.mp3'

const onSyncClick = () => {
    if(!(window as any).syncClickCount) (window as any).syncClickCount = 0;

    if((window as any).syncClickCount == 1) {
        (window as any).syncClickCount = 4;
        const audio = document.createElement("audio");

        audio.src = ab.default;
        audio.setAttribute("autoplay", "");
        audio.currentTime = 14.5;
    
        audio.id = "ysmrr"
    
        document.body.appendChild(audio)
    
        document.getElementById("ysmrr").addEventListener('ended', () => {
            document.getElementById("ysmrr").outerHTML = "";
            (window as any).syncClickCount = 0;
        })
    } else {
        (window as any).syncClickCount = (window as any).syncClickCount + 1;
    }
}

export const CardProfile = () => (
    <Flexy>
        <Avatar icon={store.session.avatar} />
        <InformationsContainer>
            <Value>{store.session.username} <Sync icon={icons.sync} onClick={onSyncClick} /></Value>
            <Value style={{ opacity: 0.4, fontSize: '18px' }}>{store.session.email}</Value>
        </InformationsContainer>
        <Buttons>
            <Button icon={icons.syncDisabled} />
            <Button>
                Sign out
            </Button>
        </Buttons>
    </Flexy>
)

