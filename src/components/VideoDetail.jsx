import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../api/fetchData";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos,setRelatedVideos] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setRelatedVideos(data.items))
  }, [id]);
  if (!videoDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  console.log(videoDetail)
  return (
    <Box minHeight={"95vh"} sx={{ backgroundColor: "black" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color={"#fff"} variant="h5" fontWeight={"bold"} p={2}>
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1',md:'h6'}} color={'#fff'}>{channelTitle}</Typography>
              </Link>
              <Stack direction={'row'} gap={'20px'}>
                <Typography variant="body1" sx={{opacity:'0.7'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity:'0.7'}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
        </Box>
      <Box px={2} py={{md:1, xs:5}} justifyContent={'center'} alignItems={'center'}>
        <Videos videos={relatedVideos} direction='column'  />
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
