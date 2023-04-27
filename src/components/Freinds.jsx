const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name} {props.lastName}</td>
    </tr>
  );
}

export const Freinds = (props) => {
  let users = props.function ();
    console.log(users);
    let userRow = [];
  let usersCount = Object.keys(users).length;
  for(let i = 0; i < usersCount; i++) {
    
    userRow.push(<TableRow index={i} key = {i} name = {users[i].name} lastName={users[i].lastName}/>)
  }
  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Фамилия Имя</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
      </div>
    </div>
  );
};
