import React from 'react';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import MicIcon from '@mui/icons-material/Mic';

export default function ChatBar() {
    return (
        <div className="flex w-full rounded-md  items-center space-x-2 bg-light-brown">
            <input
                className="flex h-10 w-full rounded-md bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Send a message..."
            />
            <IconButton
                style={{ color: "#64635E" }}
                color="primary"
                aria-label="send"
                className="bg-light-brown hover:bg-light-brown"
            >
                <Send style={{ color: "grey" }} />
            </IconButton>
            <IconButton
                style={{ color: "#64635E" }}
                color="primary"
                aria-label="send"
                className="bg-light-brown hover:bg-light-brown"
            >
                <MicIcon style={{ color: "grey" }} />
            </IconButton>
        </div>
    );
}
