import React from 'react'

function Login_popup () {

        return (
            <>
            <form >
            {
            //handle error condition
            }
            <label>User Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" data-test="username"  /><br /><br/>
            <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" data-test="password"  /><br/><br/><br/>
            <input type="submit" value="Log In" data-test="submit" />
            </form>     
            </>
        )

}

export default Login_popup