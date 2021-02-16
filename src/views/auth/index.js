import React, { useState } from 'react';
import { MENU_BUILDER } from '../../navigation/builders/menu.builders';

import './index.css'

function LoingIcon () {
    return <i className="fa fa-sign-in"></i>
}

function LoadingIcon () {
    return <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
}

function Login () {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [txtBtnLogin, setTxtBtnLogin] = useState(' Login')

    function submit () {
        setTxtBtnLogin(' Logining...')
        setIsLogin(true)
        setTimeout(() => {
            window.location.href = MENU_BUILDER[0].path
        }, 1000);
    }

    return (
        <>
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h2 className="mb-5 mt-2">Login</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-group">
                                                    <input 
                                                        className="form-control py-2 border-right-0 border shadow-none" 
                                                        type="text" 
                                                        placeholder="Username" 
                                                        onChange={event => setUsername(event.target.value)}
                                                    />
                                                    <span className="input-group-append">
                                                        <div className="input-group-text bg-transparent">
                                                            <i className="fa fa-user"></i>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <br />                                        

                                        <div className="row">
                                            <div className="input-group col-12">
                                                <input 
                                                    className="form-control py-2 border-right-0 border shadow-none" 
                                                    type={ isShowPassword ? "text" : "password" } 
                                                    placeholder="Password" 
                                                    onChange={event => setPassword(event.target.value)}
                                                />
                                                <span className="input-group-append">
                                                    <button className="btn border-left-0 border shadow-none" 
                                                        type="button" 
                                                        onClick={() => setIsShowPassword(!isShowPassword)}>
                                                        <i className={ isShowPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                                                    </button>
                                                </span>
                                            </div>
                                        </div>

                                        <br />
                                        <br />
                                        
                                        <div className="form-group">
                                            <button 
                                                type="button" 
                                                onClick={ submit }
                                                disabled={username === '' || password === '' || isLogin} 
                                                className="btn btn-block btn-danger text-light shadow-none">
                                                { isLogin ? <LoadingIcon /> : <LoingIcon /> }
                                                { txtBtnLogin }
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login