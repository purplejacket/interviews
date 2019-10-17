import React, {useState, useEffect} from 'react';
import './index.css'

const api_host = process.env.REACT_APP_API_HOST;

export default function Tree() {
    return (
            <div class="tree">
                root<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;ant <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;bear <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;frog <br/>
            </div>
    )
}