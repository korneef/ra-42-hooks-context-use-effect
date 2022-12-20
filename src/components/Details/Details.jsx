import { useEffect } from "react"
import { useState } from "react"


export default function Details({ info }) {
  const [activeUser, setActiveUser] = useState({
    id: null
  });
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (info.id === null) {
      return;
    }
    setisLoading(true)
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
      .then((resolve) => resolve.json())
      .then(user => {
        setActiveUser(user);
        setisLoading(false);
      });
  }, [info.id]);

  return (
    <>
      {isLoading ? <div className="Details">Loading...</div> : <div className="Details">
        <div><img src={activeUser.avatar} alt="" /></div>
        <div>Name: {activeUser.name}</div>
        <div>City: {activeUser.details.city}</div>
        <div>Company: {activeUser.details.company}</div>
        <div>Position: {activeUser.details.position}</div>
      </div>}
    </>
  )
}