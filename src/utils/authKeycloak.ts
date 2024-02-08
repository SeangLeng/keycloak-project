import Keycloak from "keycloak-js";
const authInstance = new Keycloak({
    url: 'http://localhost:8180/',
    realm: 'dev-test',
    clientId: 'dev-client'
});
export default authInstance;
let onAuthenticationCallback: () => void;
export const initKeycloak = (onAuthenticationCallback: () => void) => {
    authInstance.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    }).then((authenticated: boolean) => {
        if (authenticated) {
            onAuthenticationCallback();
        } else {
            console.warn("not authentiated!");
            authInstance.login();
        }
    });
};

const doLogin = () => authInstance.login();

export const UserService = {
    initKeycloak,
    doLogin,
}