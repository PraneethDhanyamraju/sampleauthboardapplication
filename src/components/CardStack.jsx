import revenue from "./icons/revenue.png"
import users from "./icons/users.png"
import transactions from "./icons/transactions.png"
import likes from "./icons/likes.png"
import Image from 'next/image'
export default function CardStack({estimates})
{

    return<> 
      {estimates!=null&&
    <div className="card-container">
  
        <div className="card">
        <Image src={revenue} alt="revenue"/>
        <p className="card-title">Total Revenues</p>
        <p className="cost">${estimates.totalRevenues}</p>
        </div>
        <div className="card">
        <Image src={transactions} alt="transactions"/>
        <p className="card-title">Total Transactions</p>
        <p className="cost">{estimates.totalTransactions}</p>
        </div>
        <div className="card">
        <Image src={likes} alt="likes"/>
        <p className="card-title">Total Likes</p>
        <p className="cost">{estimates.totalLikes}</p>
        </div>
        <div className="card">
        <Image src={users} alt="users"/>
        <p className="card-title">Total Users</p>
        <p className="cost">{estimates.totalUsers}</p>
        
        </div>

    </div>
}
    </>
    
}