

export default function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="logoMain">
          <h1>Shopping Cart.</h1>
        </div>
        <ul>
          <li className="manu">Home</li>
          <li className="manu">About</li>
          <li className="manu">Contact</li>
          <li className="manu">Signin</li>
          <li className="manu">Signup</li>
        </ul>
        <div className="search">
          <div><input type="text" placeholder="search" /></div>
          <div className="mobManu"></div>
        </div>
        <a href="" ><img src="https://static.thenounproject.com/png/462023-200.png" alt="" /></a>
      </nav>
    </>
  );
}
