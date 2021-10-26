import React, {useEffect, useState} from 'react';
import {IconButton} from "@material-ui/core";
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const MainListing = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users'
    const [fetchUser, setFetchUser] = useState([])
    const getPost = async () => {
        const response = await fetch(URL);
        setFetchUser(await response.json())
    }
    useEffect(() => {
        getPost()
    }, [])
    return (
        <div>
            <div className="row align-items-center p-3">
                {fetchUser.map((user) => (
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-3'>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-img  text-center">
                                    <img
                                        src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg?options[mood][]=sad?`}
                                        alt="" className="w-50 h-50 img-fluid"/>
                                </div>
                                <div className="ms-3 fw-bold p-0 m-0">
                                    {user.name}
                                </div>
                                <div className="d-flex align-items-center">
                                    <IconButton disableRipple disableFocusRippl disableTouchRipple>
                                        <MailOutlineOutlinedIcon/>
                                    </IconButton>
                                    <div>
                                        {user.email}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <IconButton>
                                        <PhoneEnabledOutlinedIcon/>
                                    </IconButton>
                                    <div>
                                        {user.phone}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <IconButton>
                                        <LanguageOutlinedIcon/>
                                    </IconButton>
                                    <div>
                                        {user.website}
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center justify-content-around p-2">
                                    <div>
                                        <FavoriteBorderOutlinedIcon  style={{color: 'red'}}/>
                                    </div>
                                    <div>
                                        <BorderColorOutlinedIcon className='text-muted'/>
                                    </div>
                                    <div>
                                        <DeleteIcon className='text-muted'/>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainListing;