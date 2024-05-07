import profileImage from "./../image/billgates.jpg"
import  "./css/header.css"


function Header() {
    
    return (
    <div className="header">
      <div className="profile">
        <img src={profileImage} alt="" />
        <h1>Spend Bill Gates Money</h1>
      </div>
      
    </div>
  )
}

export default Header
