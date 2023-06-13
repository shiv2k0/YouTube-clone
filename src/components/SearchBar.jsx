import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {SearchIcon} from "@mui/material"
const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate()
  const onSearch=(e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    } 
  }
  return (
    <Paper
      component={"form"}
      onSubmit={onSearch}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display:'flex'
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }} onClick={onSearch}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
