import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCheck } from '../frontend/src/modules/authCheck';

const MdContainer = ({auth, getCheck}) => {
    useEffect(() => {
        const fn = async () => {
            try{
                await getCheck();
            }catch(e){
                console.log(e);
            }
        };
        console.log('흠');
        fn();
    }, [getCheck]);

    return (
        <div>
            <h1>MdForm</h1>
            {auth && (
                <div>
                    <h2>{auth._id}</h2>
                    <h2>{auth.username}</h2>
                </div>
            )}
        </div>
    );
}

export default connect(state => {
    console.log('MdContainer.Connect()...');
    console.log(state);
    return {
        auth: state.authCheck.auth
    };
}, {getCheck})(MdContainer);