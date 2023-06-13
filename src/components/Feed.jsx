import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchData } from "../api/fetchData";


const Feed = () => {
  const [selectedCategory,setSelectedCategory]= useState('New')
  const [videos,setVideos]= useState([])
  useEffect(()=>{
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data)=>
      setVideos(data.items)
    )
    
  },[selectedCategory])
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  // console.log(videos)
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 YouTube
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4"
        fontWeight={"bold"} sx={{color: "white"}}
        >
          {selectedCategory} <span style={{color: '#F31503'}}>
            videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};
export default Feed;
