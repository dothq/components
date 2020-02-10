import React from 'react';
import { observer } from "mobx-react";
import { Spacer } from "../View/style";
import { items } from "../../constants/items";
import { Card } from "../Card";

export const ID = observer(() => (
    <div id={`mount-id`}>
        {items['id'].map((item, index) => {
            if(item.type == "spacer") {
                return (
                    <Spacer key={`spacer.${Math.random().toString(16).substr(-6)}`} />
                )
            } else {
                const next = items['id'][index+1];
                const prev = items['id'][index-1];

                if(index == 0) {
                    return (
                        <Card key={item.id} mount={item} isFirst />
                    )
                } else if(next == undefined || next.type == "spacer") {
                    return (
                        <Card key={item.id} mount={item} isFinal />
                    )
                } else if(prev.type == "spacer") {
                    return (
                        <Card key={item.id} mount={item} isMiddle />
                    )
                }

                return (
                    <Card key={item.id} mount={item} />
                )
            }  
        })}
    </div>
))