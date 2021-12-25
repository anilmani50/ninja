import User from "../component/user";
function UserList({u}){
    
    return(
        <div>
        <h1>List Of Users</h1>
        {
            u.map(user=>{
                return(
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                )
            })
        }
        </div>
    )
}

export default UserList;

export async function getStaticProps(){
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await response.json();
    console.log(data);
    return{
        props:{
            u:data
        }
    }
}