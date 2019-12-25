import React from 'react';
import {Component} from 'react';

const ZipCodeForm = () =>{
  
    return(
      <div id="zip-code-form">

    <h3>Please Enter Your Zip:</h3>
        <div id="zip-code-text-area">
        <span>
        <textarea value="12345"> </textarea>
        <button>Submit</button>
          </span>
        </div>
      </div>
    )
  }

export default ZipCodeForm;