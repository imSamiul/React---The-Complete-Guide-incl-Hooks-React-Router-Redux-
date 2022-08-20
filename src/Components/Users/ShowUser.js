import "./ShowUser.css";
const ShowUser = (props) => {
  //   console.log(props);
  const renderUser = props.users.map((user) => (
    <li>
      Name: {user.name} Age: {user.age}
    </li>
  ));
  return <ul className="list">{renderUser}</ul>;
};
export default ShowUser;
