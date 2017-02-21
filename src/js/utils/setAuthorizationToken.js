

export default function setAuthorizationToken(myHeaders) {
    const Token = localStorage.getItem('jwtToken') || 0;
    if (Token) {
        myHeaders.append('Authorization', `Bearer  ${Token}`);
    }else{
        myHeaders.delete('Authorization');
    }
    return myHeaders;
}
