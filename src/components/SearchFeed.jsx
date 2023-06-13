import { Box,  Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { fetchData } from "../api/fetchData"
import Videos from "./Videos"
import { useParams } from "react-router-dom"


const SearchFeed = () =>{
    const [videos, setVideos] = useState([])
    const {searchTerm} = useParams()
    useEffect(()=>{
        fetchData(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items))
    },[searchTerm])
    
    return <Box p={2} sx={{overflowY:'auto', height:'90vh',flex: 2,backgroundColor:'black'}}>
        <Typography variant="h4" fontWeight="bold" mb={2} color={'white'}>
            Search Results for: <span style={{color: '#f31503'}}>{searchTerm} </span>videos
        </Typography>
        <Videos videos={videos} />
    </Box>
}

export default SearchFeed