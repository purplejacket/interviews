import React, {useState, useEffect} from 'react';
import './index.css'
const axios = require('axios').default;

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