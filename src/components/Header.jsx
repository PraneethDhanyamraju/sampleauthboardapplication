import notification from "./icons/notifications.png";
import profile from "./icons/profile.png";
import Image from 'next/image'

export default function Header(){
return <div className="header-container">
    <p className="header-heading"> Dashboard</p>
    <div className="searchbar">
    <input type="text" placeholder="Search..."/>
    <Image src={notification}  className="notification" alt="notification"/>
    <Image src={profile} className="avatar" alt="avatar"/>
    </div>
   
</div>
}