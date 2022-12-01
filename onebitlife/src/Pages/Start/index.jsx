import React from "react";
import {View, ScrollView, Text, Image } from "react-native";


export default function Start(){
return(
    <view>
        <ScrollView showsVerticalScrollIndicator={false}>
            <view>
                <image soure={require("../../assets/icons/logo3.png")}/>
                <text>
                    Vamos transformar sua vida{/n} em jogo, buscando sempre {/n}
                     o melhor nivel.
                </text>
            </view>
        </ScrollView>
    </view>
);
}