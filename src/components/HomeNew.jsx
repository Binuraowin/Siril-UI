import React from 'react';

export default function HomeNew() {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="m-auto w-full max-w-lg">
                <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-3">
                        <h1 className="text-white text-lg font-medium">ChatGPT</h1>
                    </div>
                    <div className="p-4">
                        <div className="flex items-end justify-end mb-2">
                            <div className="flex flex-col items-end">
                                <div className="bg-indigo-500 text-white text-sm rounded-lg py-2 px-3 max-w-xs mb-2">Hello!</div>
                                <div className="bg-purple-500 text-white text-sm rounded-lg py-2 px-3 max-w-xs mb-2">How can I help you today?</div>
                            </div>
                            <img src="/chatbot.svg" alt="Chatbot" className="w-10 h-10 ml-3" />
                        </div>
                        <form className="flex items-center justify-center">
                            <input type="text" className="w-full border rounded-full py-2 px-4 focus:outline-none focus:border-purple-500" placeholder="Type your message here..." />
                            <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white rounded-full py-2 px-4 ml-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
