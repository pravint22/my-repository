import PropType from 'prop-types';

const welcomeMessage = {
    fontSize: "2.5em",
    backgroundColor: "rgb(37, 219, 80)",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    margin: "0"
}
const loginPromt = {
    fontSize: "2.5em",
    backgroundColor: "rgb(219, 37, 37)",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    margin: "0"
}
function UserGreeting(props){
    const welcome  =  <h2 className="welcome-message" style={welcomeMessage}>Welcome {props.userName}</h2> 
    const loginMess = <h2 className="login-promt" style={loginPromt}> please login to continue </h2>
    return (props.isLoggedIn ? welcome : loginMess )
}
// UserGreeting.proptypes = {
//     isLoggedIn: PropType.bool,
//     userName: PropType.string,
// }

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: 'Guest'
}
UserGreeting.propTypes = {
  isLoggedIn: PropType.bool.isRequired,
  userName: PropType.string.isRequired,
}
export default UserGreeting;