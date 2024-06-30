import { useState } from 'react'
import PropTypes from 'prop-types'
import { BsX } from 'react-icons/bs'

// Login function
function Login({ 
    userNames,
    userName,
    userNameError,
    handleNameSubmit,
    removeUserName, 
    handleTermsSubmit, 
    handleOutsideClick 
}) {

    // Maintain the state of the user name
    const [user, setUser] = useState(userName);
    
    const handleUsenameChange = (e) => {
        const name = e.target.value;
        setUser(name);
    }

    return (
        <>
            <div id="login">
                <div id="intro">
                    <h1>Online  <span className="theme-intruder">Q</span>uiz</h1>
                </div>
                <div id="name-getter">

                    <div className="header">
                        Sign-in
                    </div>

                    <div className="body">
                        <label>Enter your name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={user} 
                            onChange={handleUsenameChange}
                            placeholder="E.g. Manoj Raj"
                        />
                        {userNameError && <span id="name-error">{userNameError}</span>}
                        <button 
                            className="submit-button" 
                            type="button"
                            onClick={() => handleNameSubmit(user)}
                        >
                            Submit
                        </button>
                        
                        {
                            userNames && userNames.length > 0 && (
                                <>
                                <label>Or</label>
                                <p>
                                    {userNames.length > 1 ? 'Login with one of your older ones' : 'Login with your older one'}
                                </p>
                                <div className="accounts">
                                    {userNames.map((name, index) => (
                                        <button 
                                            key={index}
                                            type="button"
                                            className="account-tags"
                                            onClick={() => handleNameSubmit(name)}
                                        >
                                            {name}
                                            <button 
                                                className="close" 
                                                onClick={(event) => {
                                                event.stopPropagation(); // Stop propagation here
                                                removeUserName(name);
                                            }}>
                                                <BsX />
                                            </button>
                                        </button>
                                    ))}
                                </div>
                                </>
                            )
                        }
                    </div>    
                    
                    
                </div>
            </div>
            
        </>
    )
}

Login.propTypes = {
    userNames: PropTypes.array,
    userName: PropTypes.string,
    userNameError: PropTypes.string,
    terms: PropTypes.bool,
    handleNameSubmit: PropTypes.func,
    removeUserName: PropTypes.func,
    handleTermsSubmit: PropTypes.func,
    handleOutsideClick: PropTypes.func
}

export default Login