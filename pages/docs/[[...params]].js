
import {useRouter} from 'next/router'

function Doc(){
    const router=useRouter()
    const { params=[]} =router.query;
    console.log("params are:", params)
    if(params.length===2){
        return(
            <h1>viewing of params is {params[0]} and anil {params[1]} and {params[2]}</h1>
        )
    }
    else if(params.length===1){
        return <h1>{params[0]}</h1>
    }
  
    return(
        <h1>DOCS home page</h1>
    )
}
export default Doc