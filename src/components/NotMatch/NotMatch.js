import React from 'react';
import { useHistory } from 'react-router-dom';

const NotMatch = () => {
    const history = useHistory()
    const styles = {
        backgroundColor:'#FBD062',
        width:'100%',
        height:'100vh',
        paddingTop:'200px'
    
    }
    return (
        <div style={styles} className="text-center">
            <h4>Page not found</h4>
            <h6 className="text-danger">error 4040</h6>
            <button onClick={() => history.push('/')} className="btn-brand">Go Home</button>
        </div>
    );
};

export default NotMatch;