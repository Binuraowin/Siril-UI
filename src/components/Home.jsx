import React from 'react';
import { TextField } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import ChatBar from './Chatbar';
import SecondBar from './SecondBar';

export default function Home() {
    return (
        <div className="bg-bg-brown min-h-screen flex justify-around items-center flex-col">
            <h1 className="text-white text-center text-3xl font-bold">Welcome to siril !</h1>
            <div className="w-6/12 flex justify-around items-center">
            {/* <ChatBar/> */}
            <SecondBar/>
            </div>
            
        </div>
    );
}
