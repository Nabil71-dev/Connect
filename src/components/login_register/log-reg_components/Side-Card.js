import { NavLink } from "react-router-dom";

const SideCard = ({ login }) => {
    return (
        <>
            {
                login ? <>
                    <h1>New here.?</h1>
                    <p>New arround here..? . Create acount and make your network more stronger and connect with the people of your beloved univerty</p>
                    <NavLink to="/register"><button className="button-main">Creat account</button></NavLink>
                    </>
                    :
                    <>
                        <h1>One of us.?</h1>
                        <p>New arround here..? . Create acount and make your network more stronger and connect with the people of your beloved univerty</p>
                        <NavLink to="/login"><button className="button-main">Login</button></NavLink>
                    </>
            }
        </>
    );
};
export default SideCard;