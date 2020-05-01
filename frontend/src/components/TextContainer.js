import React from 'react';

import onlineIcon from '../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer=({users})=>(
    <div class="textContainer">
        <div>
            <h1>Chat Application Realtime <span role="img" aria-label="emoji">💬</span> </h1>
            <h2>Created using React.js,Node.js and Socket.IO</h2>
        </div>
        {
            users?(
                <div>
                    <h1>People online: {users.length} </h1>
                    <div className="activeContainer">
                        <h2>
                            {users.map(({name})=>(
                                <div key={name} className="activeItem">
                                    {name}
                                    <img alt="Online Icon" src={onlineIcon} />
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            ):null
        }
    </div>
);

export default TextContainer;
