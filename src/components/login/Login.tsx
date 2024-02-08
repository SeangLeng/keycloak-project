import {useKeycloak} from "@react-keycloak/web";

const Login = () => {
    const { keycloak, initialized } = useKeycloak();

    if (!initialized) {
        return <div>Loading...</div>;
    }

    // @ts-ignore
    return keycloak.authenticated ? (
        <div>Welcome back!</div>
    ) : (
        <button onClick={() => keycloak.login()}>Login</button>
    );
};

export default Login;