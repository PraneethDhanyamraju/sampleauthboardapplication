import Head from 'next/head'
import Navbar from "../components/Navbar"
import Dashboard from "../components/Dashboard"

export default function Homepage(){
    
    return(<div>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="   />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet"/>
        </Head>
        <div className="App">
        <Navbar/>
        <Dashboard/>
     </div>
     </div>
        )
    
}