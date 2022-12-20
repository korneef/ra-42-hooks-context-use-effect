import classNames from "classnames"

export default function List({ users, activeUser, handleChangeUser }) {
  const className = 'user-list'
  return (
    <ul className={className}>
      {users.map((item) => {
        return <li
          className={classNames([className + '__item'], { [className + '__item_active']: item.id === activeUser })}
          key={item.id}
          onClick={()=>handleChangeUser(item.id)}>
          {item.name}
        </li>
      })}
    </ul>
  )
}
