import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Tree from './tree';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <img className="App-logo" src="https://www.hingehealth.com/s/hh-logo.png" />
      <h2>Welcome!  Thanks for interviewing with Hinge Health!</h2>
      <p>We're going to work with some trees today.  Our goal with this exercise isn't to 
      "stump" anyone with tricky business, but to give candidates a fair and uniform way to 
      express themselves in code on a realistic-ish problem.</p>  
      <p>
      In an hour, we expect everyone will get some of the way through this problem, and 
      no one will get all the way through.  If invited to an on-site interview, you'll 
      pair with us wherever you left off, because we'd much rather see how you work on a problem you're familiar with and have had time 
      to think about than on some clever whiteboard puzzle we spring on you.
      </p>
      <p>
      At this stage, we care most about:
      <ul>
        <li>Interpreting written specs (following instructions)</li>
        <li>General familiarity with layout, data modeling, interaction, network i/o</li>
        <li>Legible code</li>
      </ul>
      </p>
      <p>
        When in doubt, do less, better. :)
      </p>
      <hr />
      <Container>
        <Row>
          <Col sm={6}>
          <div className="App-instructions"> 
            <div className="App-step">🎨 First, with style </div>
            <div className="App-instructions">
              <ol>
                <li>Check out the file <code>./tree/index.js</code>.</li>
                <li>Replace its inline "styling" with css in the <code>./tree/index.css</code> file.</li>
                <li>When the results look exactly the same as the original, please commit changes to master and push to remote.</li>
                <li><i>Bonus: How would you prove that your results are exactly the same as the original?  (Show work in a new commit.)</i></li>
                <li><i>Bonus: Can we number every line such that <code>root</code> starts with "1" 
                      and <code>ant</code> starts with 1.1 and ... <code>elephant</code> starts with 1.2.2.1? (Show work in a new commit.)</i></li>

              </ol>
            </div>
            <div className="App-step">🔢 Next, with data. </div>
            <div className="App-instructions">
              <ol>
                <li>Check out the (empty) file <code>./tree/data.json</code>.</li>
                <li>Replace its emptiness with a JSON object that represents our animal tree.  
                  It should capture just the values and relationships currently onscreen after step one</li>
                <li>Update <code>./tree/index.js</code> to use your JSON object to draw the animal tree 
                instead of the your (styled) inline text.</li>
                <li>When the results look exactly the same as the original, please commit changes and push to remote.</li>
                <li><i>Bonus: Redraw the tree upside down (reading bottom to top: root, ant, bear...)</i></li>
                <li><i>Bonus: After the first letter of each element, add as many periods as the level the element is on.  (Root is 0)  E.g. <code>d..og</code></i></li>


              </ol>
            </div>
            <div className="App-step">✨ Let's add interactions </div>
            <div className="App-instructions">
              <ol>
                <li>Add a text input field below the last element in each level, at the right indentation level.  There should be one text input 
                  at level 0 after frog, one at level 1 directly above that, one below elephant at level 3, and another beneath 
                  that at level 2.
                </li>
                <li>When someone types a new word in the text box and hits enter, add that word to the tree and redraw it.</li>
                <li>Add a ❌ after every element on the tree.  When a user clicks the ❌, remove that node. </li>
                <li>When you can add and remove items from the tree, commit your changes and push to remote.</li>
                <li><i>Bonus: Add a toggle to the page that alphabetizes the tree, when toggled one way, or restores the 
                  tree to the order items were entered when toggled the other way.</i></li>
                <li><i>Bonus: How would you prove that elements can be added and removed from the tree properly?</i></li>
              </ol>
            </div>
            <div className="App-step">💾 And persistence! </div>
            <div className="App-instructions">
              Check out the persistence API at <a href="http://myjson.com/api">http://myjson.com/api</a>
              <ol>
                <li>Save your tree whenever a new element is added or deleted.</li>
                <li>Commit your changes and push to remote when you can make a changes to the tree that are fetched from the API on page refresh.</li>
                <li><i>Bonus: Add a debouncer to only save the tree when it's changed.</i></li>
                <li><i>Bonus: How would you use this API to make a (more or less) collaborative tree editing app?  
                       How collaborative could it be? What limits would it have?</i></li>
              </ol>
            </div>
          </div>
          </Col>
          <Col sm={6}>
            <Tree />
          </Col>
        </Row>
      </Container>
    </div>
  );
}