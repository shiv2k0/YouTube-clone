import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";
import moment from "moment";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log( snippet);
  return (
    <Card sx={{width: {md:'320px',sm:'358px', xs:'100%'},boxShadow:'none',borderRadius:0, backgroundColor:'black', scale:'0.95'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 , borderRadius:'10px'}}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "black", height: "106px" }}>
        <Link
          to={
            videoId ?
               `/video/${videoId}`
              : demoVideoTitle
          }
        >
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"} flexWrap={'wrap'}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelTitle
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"} display={'flex'} alignItems={'center'}>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize: 12, color:"gray", ml:'5px'}} />
          </Typography>
          <Typography variant="subtitle2"  color={"gray"} fontSize={'14px'}>
            {`${(moment(snippet?.publishedAt).fromNow())}`}
          </Typography>
          </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
