import React from 'react';
import './style.scss';
import image from './unity.png';
import image1 from './unreal.png';
import image2 from './cordova.png';
import image3 from './Gameplay.png';
import image4 from './firebase.png';
import image5 from './database.png';
import image6 from './time.png';
import image7 from './hundred.jpg';
import image8 from './torch.png';
import image9 from './map.png';
import image10 from './sql.png';
import image11 from './lego.png';




export default [{
  name: 'bachelors',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Ongoing
      </div>
      <div className='portfolio-item__desc'>
      <h5> Jan 2019 - Jun 2019 </h5>
        Multiplayer game using tablets to play
      </div>
      <div className='portfolio-item__icon'>
        <i className="fas fa-code"></i>
      </div>
      <div className='portfolio-item__links'>
        
        
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal">More</a>
        

      </div>

      <div className="container">    
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Multiplayer game using tablets </h4>
                </div>
                <div className="modal-body">
                  <p>As a bachelor's project I am going to develop some sort of a tower defense-like game together with 5 other students. 
                  At the moment it's in its earliest stages but the idea is that every player places his/hers tablet in one corner of a table.
                  The devices calibrate themselves using the tablets accelerometers to determine the distances of the corners (we are still uncertain on how to solve this problem). 
                   The game design is obviously not yet finished since at the time of writing we've only had two weeks of planning. </p>
                   <br/>

                   <center><p><strong>Developing skills in: </strong><i>Organising, planning, management, decision-making, problem-solving, individual responsibilities, Javascript (?), Git, Scrum, Software and Agile development.</i></p></center>
                </div>
                <div className="modal-footer">
                  <a href="https://liu.se/studieinfo/en/kurs/tnm094/vt-2019" target="_blank" rel="noopener noreferrer" >Course site</a><br/><br/>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>

    </div>
  )
}, {
  name: 'trebuchet',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Ongoing
      </div>
      <div className='portfolio-item__desc'>
      <h5> Jan 2019 - Mar 2019 </h5>
        Trebuchet simulation
      </div>
      <div className='portfolio-item__icon'>
        <i className="fas fa-code"></i>
        
      </div>
      <div className='portfolio-item__links'>
      
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal1">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal1" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Trebuchet simulation </h4>
                </div>
                <div className="modal-body">
                  <p>As course project in 'Modelling project - <a href="https://liu.se/studieinfo/kurs/tnm085/vt-2019/" target="_blank" rel="noopener noreferrer"> TNM085</a>' we are working in a group of four people to try and simulate and animate a working trebuchet projectile throw. 
                  Firstly we will simulate the throw in MATLAB and later move on to a rendering software of our like. Both OpenGL and Three.js are probable methods.
                   <br/>
                  The main focus of the project is to model a system (using differential equations) and then render it however we'd like.   </p>
                  <br/>
                  <center><p><strong>Developing skills in: </strong><i>Organising, planning, decision-making, problem-solving, Javascript (?), OpenGL(?) and Git.</i></p></center>
                </div>
                <div className="modal-footer">
                  <a href="https://liu.se/studieinfo/en/kurs/tnm085/vt-2019" target="_blank" rel="noopener noreferrer" >Course site</a><br/><br/>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>


    </div>
  )
}, {
  name: 'portfoliowebsite',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Portfolio website
      </div>
      <div className='portfolio-item__desc'>
      <h5> Oct 2018 - Feb 2019 </h5>
        The website you're looking at right now
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-react"></i>
        <i className="fab fa-js"></i>     
        <i className="fab fa-sass"></i>       
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/samuelllsvensson.github.io"><i className="fab fa-github fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal2">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal2" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Portfolio website </h4>
                </div>
                <div className="modal-body">
                  <p>I started developing this website to challenge myself and learn more about React. I used some resources from the internet to put together what you are looking at right now using only React and no UI libraries/frameworks.    
                  My first encounter with React was through the course 'Communication and User Interfaces -<a href="https://liu.se/studieinfo/kurs/tnm040/ht-2019/" target="_blank" rel="noopener noreferrer"> TNM040</a>' course during my second year of university. 
                  We were introduced to how components, arrow functions and what JSX was. From there I tried (and failed) to create something worthy of displaying. Nevertheless, I learned a lot.</p>
                  <br/>

                  <p>Now I'm realizing there's a huge demand for web developers who can use React confidently, as well as other JS frameworks such as Next.js, Vue.js and so on (it never ends). 
                  So I thought to myself that I'd make myself a website to display all of my projects and learn as much React as I can on the way. I've always wanted a place to gather all of my work during my studies.</p>                  
                  <br/>  

                  <p>I'm a big fan of responsive design so it's no surprise I enjoy using Flexbox to layout everything. It's just too good to skip out on, and almost all browsers support it. 
                  Sass is something I'm quite new to but I was able to find valuable resources on how to use breakpoint mixins and apply them to my site. </p> 
                  <br/>
                  <p>
                  The CSS Parallax stars in the background (one of my favourite features) are from a CodePen I found <a href="https://codepen.io/anon/pen/NojZOV?editors=1100" target="_blank" rel="noopener noreferrer"> here</a>.
                  </p> 
                  <br/><br/>
                  <center><p><strong>Developed skills in:</strong><i> React, Javascript, HTML5, CSS3, Sass and Flexbox. </i></p></center>
                </div>
                <div className="modal-footer">                  
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>

    </div>
  )
},  
{
  name: 'spacegame',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        SpaceGame 
      </div>
      <div className='portfolio-item__desc'>
      <h5> Sep 2018 - Nov 2018 </h5>
        A sound-based game
      </div>
      <div className='portfolio-item__icon'>
        <img src={image} height="100" width="100" alt="unity logo"/>
     
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/SpaceGame"><i className="fab fa-github fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal3">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal3" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Space game made in Unity </h4>
                </div>
                <div className="modal-body">
                  <p>For this project, we had free reins over what we wanted to do, as long as it was about audio. This was for the course 'Physics of Sound - <a href="https://liu.se/studieinfo/kurs/tnm040/ht-2019/" target="_blank" rel="noopener noreferrer"> TFYA65</a>'  </p>
                 
                  <p>We decided it would be interesting to incorporate some sort of audio visualization and then later on make it into a game to give it some purpose. 
                  The result was "SpaceGame" (a superb name), where the goal was to avoid the frequency bars that were scaling up or down depending on how much information that specific band contained.
                  I hadn't coded in C# since high school but using Unity is very intuitive with a fast learning curve. 
                  The main focus for the game was on the sound physics part, which was also the part that the examiners evaluated. </p>
                  <br/>
                  <p>Colliding with the bars meant game over and to be able to stay in the air (vacuum?) you need to collect the falling batteries that spawn in random intervals and positions. 
                  Asteroids were implemented to make the game more interesting. </p>
                  <br/>
                  <img src={image3} height="100%" width="100%" alt ="gameplay" />  
                  <br/>            
                  <center> Gameplay of SpaceGame. </center>

                  <br/><br/>
                  <center><p><strong>Developed skills in: </strong><i>Unity, C#, sound Physics, sound analysis and digitizing audio. </i></p></center>
                </div>
                <div className="modal-footer">
                  <a href="files/Ljudfysikrapport.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" >Project report</a><br/><br/>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>


    </div>
  )
}, 
{
  name: 'hundreddays',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        100 dagar
      </div>
      <div className='portfolio-item__desc'>
      <h5> June 2018 </h5>
        Countdown app for my girlfriend
      </div>
      <div className='portfolio-item__icon'>
        <img src={image4} height="25" width="25" alt="firebase"/> 
        <i className="fab fa-js"></i>        
        <img src={image2} height="90" width="90" alt="cordova" /> 
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/100-dagar"><i className="fab fa-github fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal4">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal4" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">100 dagar </h4>
                </div>
                <div className="modal-body">
                  <p>100 dagar (translated '100 days') was a project meant as a surprise for my girlfriend. 
                  In september 2018 she left to study abroad for a year at Stanford University in Palo Alto. 
                  Since we were going to be separated for more than three months, I thought it would be fun to have some sort of countdown app developed for us until we saw eachother again. 
                  I was a bit lucky with the dates. Apparently there's exactly 100 days between the 7th of sept and the 14th of dec, hence the name.
                  This was the first time I used Javascript for a serious project and I learned a lot during these weeks. </p>
                  <br/>

                  <p>I wanted it to be personalized instead of just downloading any other app on the Play store. I wanted to be able to write her messages each day and show her specific photos, as a sort of a flashback. 
                  I knew that for this to be able to work I needed a server to store both text and images and I decided that Google's Firebase would suit my needs perfectly. </p>
                  <br/>
                  <img src={image5} height="100%" width="100%" alt="firebase tree"/>  
                  <center>  Hash tree in Firebase with a 'Text' key and an 'img' key containing information for that day. </center>  
                  <br/>
                  <p> Creating an mobile app itself can be tedious work and since most of my coding experience previous before this was web development, it felt natural to stick with it. 
                  I found an open-source mobile development framework called <a href="https://phonegap.com/" target="_blank" rel="noopener noreferrer">'Adobe Phonegap'</a> which allowed me to use Javascript, HTML5 and CSS3 for cross-platform development. 
                  Phonegap is a distribution of <a href="https://cordova.apache.org/" target="_blank" rel="noopener noreferrer">'Apache Cordova'</a> which comes with a ton of different plugins to utilize device capabilities such as camera, GPS and so on. 
                  I didn't use any of those for this project but I will certainly take a closer look at the possibilities when I have free time.</p>
                   <br/>
                  <p>The idea was that every morning when she woke up in the US, a new text and corresponding image would be shown when starting the app. 
                  I (manually..) entered each entry into the database which was structured like a hash tree hosted on the cloud.
                  I converted the JS Date objects into an integer which represented the current millisecond since Epoch (Unix timestamp) and compared this with entries in the realtime database. 
                  If the time had passed 03.00 am (PST) it would query the database with a new text and a new image (using Firebase Storage) for her to see in the morning.</p>
                  <br/>

                  <img src={image6} height="80%" width="80%" alt="100 dagar"/> 
                  <center>  Short snip of code that displayed current date and how many days were left. </center>  
                  <br/>

                  <p>Memento.js is a useful library to manipulate Javascript dates into useful formats, and it comes with multi-language support. 
                  I used this to display how many days there was left until we could see eachother again and what today's date was. </p>
                  <br/>

                  <p>Finally I packaged my app into an .apk using <a href="https://build.phonegap.com/" target="_blank" rel="noopener noreferrer">Adobe Phonegap Build</a>. </p>
                  <br/>

                  <img src={image7} height="50%" width="50%" alt="finished app"/> 
                  <br/>
                  <center>  Finished app the day before departure. </center>  
                  <br/>
                   
                  <p>This project was a great learning opportunity and it was extremely satisfying to solve some of the problems I faced, like querying the database in the correct way. 
                  
                  <a href="https://www.youtube.com/watch?v=c3KX1I5SiVI" target="_blank" rel="noopener noreferrer">Here</a> is a short walkthrough of how the app works (translated to english and with example text/images for privacy purposes).</p>
                  <br/><br/>

                  <center><p><strong>Developed skills in: </strong><i> Google Firebase, Javascript (and Memento.js), Apache Cordova, Adobe Phonegap, HTML5, and CSS3.</i></p></center>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>


    </div>
  )
}, 
{
  name: 'amaze',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Amaze 
      </div>
      <div className='portfolio-item__desc'>
      <h5> Apr 2018 - June 2018 </h5>
        Escape the maze using Samsung Gear VR
      </div>
      <div className='portfolio-item__icon'>
        
        <img src={image1} height="60" width="60" alt="Unreal"/>     
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/Amaze"><i className="fab fa-github fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal5">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal5" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Amaze - a Gear VR game</h4>
                </div>
                <div className="modal-body">
                  <p>For the course '3D-Computer graphics - <a href="https://liu.se/studieinfo/kurs/tnm040/ht-2019/" target="_blank" rel="noopener noreferrer">TNM061</a>' we created 'Amaze' which is a mobile VR game where you start in the center of a maze with the objective of escaping it. 
                  My group decided to use Unreal Engine 4 which was the first time ever I had used it. </p>
                  <br/>
                  <p>Using its 'Blueprint' block programming style we modelled and implemented a handheld torch for the player to guide themselves with through the maze. 
                  The torch had limited fuel which had to be replenished by picking up matches scattered around the maze. 
                  A spider-monster was modelled in 3DSMax (like many of the other objects in the maze) and programmed to run along a spline path when triggered by the player.
                  Several puzzles were implemented into the game to add a layer of difficulty and lighting lowered to make it scary. </p>
                  <br/>
                  <img src={image8} height="100%" width="100%" alt="mazeplay"/> 
                  <br/>
                  <center>  Blueprints of torch implementation. </center>  
                  <br/>
                  <a href="https://vimeo.com/272102306" target="_blank" rel="noopener noreferrer">Watch</a> a short promotional video.
                  <br/>     <br/>

                  <p>The player could play all by himself, or have a second person be their guide. 
                  This second player would have access to a map of the maze and also the solutions to its puzzles which would help the first player progress faster.</p>

                  <img src={image9} height="100%" width="100%" alt="mazemap"/> 
                  <br/>
                  <center>  The map that the second player would have access to. </center>  
                  <br/><br/>
                  <center><p><strong>Developed skills in: </strong><i>Unreal Engine 4 and its 'Blueprints', C++17, 3DSMax, Computer graphics and Git. </i></p></center>
                </div>
                <div className="modal-footer">
                  <a href="files/datorgrafikrapport.pdf" type="application/pdf"  target="_blank" rel="noopener noreferrer">Project report</a><br/><br/>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>


    </div>
  )
}, 
{
  name: 'pandorasapp',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Pandoras App
      </div>
      <div className='portfolio-item__desc'>
      <h5> Oct 2016 - Jan 2017 </h5>
        Ask your friends anonymous questions
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-android"></i>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/Pandoras-App"><i className="fab fa-github fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal6">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal6" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Pandoras App</h4>
                </div>
                <div className="modal-body">
                  <p>For the course 'Communication and User Interfaces - <a href="https://liu.se/studieinfo/kurs/tnm040/ht-2019/" target="_blank" rel="noopener noreferrer">TNM040</a>' me and my group decided to develop an Android application. 
                  This was new to all of us which made it a bit more interesting. The idea was to have an application where everyone could enter anonymous questions which would then be put inside a 'pool' and then displayed in a random order.
                  Initially we wanted it to be web-based where everyone could enter a link to enter the game, very much like what Jackbox.tv does perfectly. But we were uncertain on how to proceed so we settled with Android. </p>
                  <br/>
                  <p>The result was an Android app where you passed around one Android phone, entered your question, and when everyone was done the questions were read. 
                  It was first meant to be played as some sort of a drinking game and if we would have had more time there would've been alterations to make it more centered like one.</p>
                  <br/><br/>
                  <center><p><strong>Developed skills in: </strong><i>Java, Android development and Git.  </i></p> </center>
                </div>
                <div className="modal-footer">
                  <a href="files/pandorasrapport.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" >Project report</a><br/><br/>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>

    </div>
  )
}, 
{
  name: 'legodatabase',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        LEGO database
      </div>
      <div className='portfolio-item__desc'>
      <h5> Oct 2016 - Jan 2017 </h5>
        Search for thousands of LEGO parts and view them in an intuitive layout
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-php"></i>
        <img src={image10} height="60" width="60" alt="MySQL" />         
        <i className="fab fa-html5"></i> 
        <i className="fab fa-css3"></i>    
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/LEGO-database"><i className="fab fa-github fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal7">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal7" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">LEGO database  </h4>
                </div>
                <div className="modal-body">
                  <p>As course project in 'Electronic Publishing - <a href="https://liu.se/studieinfo/kurs/tnm040/ht-2019/" target="_blank" rel="noopener noreferrer">TNMK30</a>' my group and I created a website for the purpose of displaying LEGO parts. 
                  The project revolved mostly around the back-end part since we were supposed to be able to query MySQL tables and design a visually esthetic website.   </p>
                  <br/> 

                  <p>I had only had limited experience in web development during high school but I had never tried out server-related development. Safe to say it was a very steep learning curve. 
                  PHP is unforgiving and we spent countless hours on trying to do everything right. 
                  I personally stayed at campus alone until the days before Christmas to ensure that everything was working correctly with the database and that the design was alright.   
                  The final result is a fully functionable website where you can search for either a LEGO ID or a LEGO name of a part. 
                  The parts are displayed in a grid like layout where you can browse back and forth several pages of results. </p>
                  <br/> 
                  <img src={image11} height="100%" width="100%" alt="legohome"/> 
                  <br/>
                  <center>The home page of the LEGO database</center>  
                  <br/><br/>

                  <center><p><strong>Developed skills in: </strong><i> MySQL, PHP, HTML5 and CSS3. </i></p></center>
                </div>
                <div className="modal-footer">
                  <a href="http://www.student.itn.liu.se/~ebbni997/legobas/" target="_blank" rel="noopener noreferrer">Website</a><br/><br/>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>

    </div>
  )
}, 
{


  name: 'apocalypse',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>      
        Apocalypse short film
      </div>
      <div className='portfolio-item__desc'>
      <h5> Oct 2016 - Dec 2016 </h5>
        Post-apocalyptic zombie-film at campus
      </div>
      <div className='portfolio-item__icon'>
        <i className="fas fa-video"></i>       
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/194536185"><i className="fab fa-vimeo fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal8">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal8" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Apocalypse short film</h4>
                </div>
                <div className="modal-body">
                  <p>The first course I studied at Linköpings University 'Digital media - TNM088' served as an introductory course in digital medias where we learned basic image processing, video production and graphic design/typography. 
                  The final part of the course was a project where my group decided to create a short film. </p>
                  <br/>

                  <p>The film focuses on small details around on set and also ambient sound effects to make it seem more dramatic. A man wakes up bloody in a room and seems confused of his whereabouts. 
                  He tries to get out of the room and search his surroundings for clues. He suffers intense flashbacks during this and he realizes what has happened to campus. Zombies chase him and he finally escapes... or does he? </p>
                  <br/>

                  <a href="https://vimeo.com/194536185" target="_blank" rel="noopener noreferrer">Watch</a> the short film here.
                  
                  <br/><br/>
                  <center><p><strong>Developed skills in: </strong>  <i>Adobe Premiere Pro, Adobe After Effects, Film compositions and Script writing. </i></p> </center>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>  
            </div>
          </div>        
        </div>

    </div>
  )
}, 
]