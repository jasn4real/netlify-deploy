import { useEffect, useState } from 'react';

function Main() {

  const [apis, setApis] = useState("")

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
    .then(respnse => Response.json())
    .then(data => setApis(data.entries))
  }, [])

  return (
    <div className="App">
      {
        apis.filter(api => api.Auth === "apiKey").map(api => {
          return (
            <p>
              <a href={api.Link}>{api.API}</a>
            </p>
          )
        })
      }
    </div>
  );
}

export default Main;
