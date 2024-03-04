
import  Axios  from "axios";
import { createContext, useEffect, useState } from "react";


export let context =createContext(0)

 function ConterContextprovide(props)
 {
    let [Movie, setMovie] = useState([])
    let [Tv, setTv] = useState([])
    let [Person, setPerson] = useState([])

    async function getTreningMovies(type , vlue){
    let {data}= await Axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=3f9a9c8b7cd88bdbcca2ae7a3413f9d0 `)
    vlue(data.results)
    }
    
useEffect(()=>{
getTreningMovies('movie',setMovie)
getTreningMovies('tv',setTv)
getTreningMovies('person',setPerson)
},[])

    return<>
     <context.Provider value={{Movie,Tv,Person}} >
     {props.children}
    </context.Provider>
    </>
}
export default ConterContextprovide