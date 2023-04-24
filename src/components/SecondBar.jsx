import React, { useState, useRef } from 'react';
import { IconButton } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import MicIcon from '@mui/icons-material/Mic';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function SecondBar() {
    const [message, setMessage] = useState('');
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);

    const handleListing = () => {
        if (isListening) {
            stopHandle()
            handleReset()
        } else {
            setIsListening(true);
            microphoneRef.current.classList.add("listening");
            SpeechRecognition.startListening({
                continuous: true,
            });
            console.log(transcript)
        }

    };
    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
    };
    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };


    function startConverting() {
        console.log("startConverting")
        // Add the startConverting function code here
    }

    function handleSendClick() {
        console.log("handleSendClick")
        // Send the message
        console.log(`Sending message: ${message}`);
        // setMessage('');
    }

    return (
        <div className="flex w-full rounded-md  items-center space-x-2 bg-light-brown">
            <input
                className="flex h-10 w-full rounded-md bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Send a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <IconButton
                style={{ color: "#64635E" }}
                color="primary"
                aria-label="send"
                className="bg-light-brown hover:bg-light-brown"
                onClick={handleSendClick}
            >
                <Send style={{ color: "grey" }} />
            </IconButton>
            <div ref={microphoneRef}>
                {isListening ? (
                    <IconButton
                        style={{ color: "#64635E" }}
                        color="primary"
                        aria-label="send"
                        className="bg-white hover:bg-light-brown"
                        onClick={handleListing}
                    >
                        <MicIcon style={{ color: "white" }} />
                    </IconButton>
                ) : (
                    <IconButton
                        style={{ color: "#64635E" }}
                        color="primary"
                        aria-label="send"
                        className="bg-light-brown hover:bg-light-brown"
                        onClick={handleListing}
                    >
                        <MicIcon style={{ color: "grey" }} />
                    </IconButton>
                )}

            </div>

        </div>
    );
}
