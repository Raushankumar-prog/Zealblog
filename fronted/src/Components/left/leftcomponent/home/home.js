
import './home.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const nichetype=[
  { label: 'Space'},
   { label: 'war'},
  { label: 'ocean'},
  { label: 'island'},
  { label: 'animal'},
  { label: 'world record'},
  { label: 'rocket'},
  { label: 'educational institute'},
  { label: 'vehicle'},
  { label: 'job'},
  { label: 'sports'},
  { label: 'IPL'},
 
 
 ];
const Home = () => {
   
    return ( <div id="form">
        <div className="form-group">
                <label htmlFor="title">Title:</label><br/>
                <input
                    type="text"
                    placeholder="heading of post"
                    id="posttitle"
                className="form-control"
                />
                </div>
    <div className="form-group">
  <label htmlFor="content">Content:</label><br/>
  <textarea
    placeholder="Write the beief description of your post "
    id="content"
    className="form-control"
     style={{ height: '6 %' }} 
  />
</div>
 <div className="form-group">
             
              <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={nichetype}
      sx={{ width: '30%' }}
      renderInput={(params) => <TextField {...params} label="NICHE" />}
    />
            </div>
 
    </div> );
}
 
export default Home;