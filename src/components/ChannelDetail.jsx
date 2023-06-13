import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Videos,ChannelCard} from "./"
import { fetchData } from "../api/fetchData"
import { Height } from "@mui/icons-material"

const ChannelDetail = () =>{
    const [channelDetail,setChannelDetail]= useState(null)
    const [videos,setVideos]= useState([])
    const {id} = useParams()
    useEffect(()=>{
        fetchData(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]))
        fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items))
    },[id])
    console.log(videos)
    console.log(channelDetail)
    // console.log(id)
    return <Box minHeight={'95vh'} sx={{backgroundColor:'black'}}>
        <Box>
            <div style={{
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(6,71,162,1) 55%, rgba(5,87,172,1) 60%, rgba(2,153,216,1) 72%, rgba(2,163,222,1) 84%, rgba(1,172,228,1) 100%, rgba(0,41,249,1) 100%, rgba(0,212,255,1) 100%)'
                , height: '300px' ,
                zIndex: 10
            }} />
            <ChannelCard channelDetail={channelDetail} marginTop="-120px"/>
        </Box>
        <Box display={'flex'} p={2}>
            <Box sx={{mr: {sm: '100px'}}}/>
                <Videos videos={videos} />

        </Box>
    </Box>
}

export default ChannelDetail