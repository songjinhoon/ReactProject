import React from 'react';

const Md = ({auth}) => {

    return (
        <div>
            <section>
                <h1>포스트</h1>
                {auth && (
                    <div>
                        <h3>{auth._id}</h3>
                        <h3>{auth.username}</h3>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Md;