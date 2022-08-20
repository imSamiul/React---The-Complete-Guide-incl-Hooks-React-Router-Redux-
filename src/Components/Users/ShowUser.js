import "./ShowUser.css";
const ShowUser = (props) => {
  const onSelect = (event, id) => {
    props.onDelete(id);
  };
  const renderUser = props.users.map((user, index) => (
    <ul className="list" key={index}>
      <li onClick={(evt) => onSelect(evt, user.id)}>
        Name: {user.name} Age: {user.age}
      </li>
    </ul>
  ));
  const render = props.users.length !== 0 && (
    <div className="userList">{renderUser}</div>
  );
  return <div>{render}</div>;
};
export default ShowUser;
