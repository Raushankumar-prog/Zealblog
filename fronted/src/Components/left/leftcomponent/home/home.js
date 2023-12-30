
import './home.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeRequest } from '../../../fetch/fetch';

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
   
  const handleSubmit = async () => {
    const title = document.getElementById('posttitle').value;
    const content = document.getElementById('content').value;
    const nichetypeValue = document.getElementById('combo-box-demo').value;
    const imageFile = document.getElementById('postimage').files[0];
    const textFile = document.getElementById('fileuploaded').files[0];

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('nichetype', nichetypeValue);
      formData.append('image', imageFile);
      formData.append('file', textFile);

      // Use the makeRequest function to make the API request
      const response = await makeRequest('/createpost', 'POST', formData);

      if (response.success) {
        console.log('Post created successfully:', response.post);
      } else {
        console.error('Failed to create post:', response.error);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
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
     <div className="form-group">
                <label htmlFor="title"  className='postlabel'>Image:</label><br/>
                <input
                    type="file"
                    placeholder="heading of post"
                    id="postimage"
                    className="form-control-image"
                    accept='image/*'
                />
                </div>
                 <div className="form-group">
                <label htmlFor="title" className='postlabel'>file:</label><br/>
                <input
                    type="file"
                    placeholder="heading of post"
                    id="fileuploaded"
                    className="form-control-image"
                    accept='.txt'
                />
                  <button type="button" className="btn-primary" onClick={handleSubmit}>
              Submit
            </button>
                </div>
    </div> );
}
 
export default Home;