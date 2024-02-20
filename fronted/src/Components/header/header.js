import './header.css';
import * as React from 'react';

import Search from '../ui/search/search';


export  default function  Header() {
 

    return ( <div>
          <div className="heading">

           {/*<div className="left">
                 <div  className="appicon"><div className="re"><MenuIcon/></div></div>
               
           </div>*/}
            <div className="center">
                       <Search/>
            </div>
           {/* <div className="right">

                <div className='post'>
                         <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}> Upload file <VisuallyHiddenInput type="file" />
                          </Button>
          </div>  
          </div>*/}
          </div>
    </div> );
}
 
