import React from 'react';
import image from './plants.jpg';
import image2 from './legionen.jpeg';
import image3 from './labass.jpg';
export default [
{
  name: 'cygni',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Student Brand Manager
      </div>
      <div className='portfolio-item__desc'>
        <h5> Apr 2018 - Now </h5>
        Student ambassador for the IT-consultant company Cygni
      </div>
      <div className='portfolio-item__icon'>     
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="https://cygni.se/"><i className="fas fa-globe fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal9">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal9" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Cygni</h4>
                </div>
                <div className="modal-body">
                  <p>I have had the pleasure (since April of 2018) to work as a student ambassador for the IT-consultant company Cygni. 
                  With this opportunity I'm able to get a first hand view of how it's like to work as a consultant doing something that I would very much like to do in the future, code. 
                  <br/> 
                  My duties are to represent the company while on campus and on different fairs like LINK (Arbetsmarknadsdagarna inom data och IT på LiU) and MTD (Medieteknikdagarna). 
                  I help plan stand-alone events hosted by the company and in return I get to travel to Stockholm couple of times every semester to attend consultant meetings, activities and conferences.  </p>
                  
                  <br/><br/> 
                  <center><p><strong>Developed skills in: </strong><i> Planning, Networking and Coordinating. </i></p></center>           
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
  name: 'legionen',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Legionen  
      </div>
      <div className='portfolio-item__desc'>
        <h5> Jan 2017 - Jan 2018 </h5>
        Volunteered during the welcoming of the new students
      </div>
      <div className='portfolio-item__icon'>     
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://www.legionen.nu"><i className="fas fa-globe fa-lg"></i> </a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModa20">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModa20" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Legionen 2017</h4>
                </div>
                <div className="modal-body">
                  <p>Legionen is part of the Welcoming Committee for LinTek. LinTek is the Student Union for the Institute of Technology at Linköping University. 
                  In Legionen I was responsible for the sittings during the welcoming weeks for the new students in August 2017. Part of being a 'phadderist' is to grow your beard and dress up in costume. 
                  Mostly to become a topic of conversation between the new students that are getting to know eachother.  
                  We performed during the first few weeks while we lead the activities and performed at the pre-parties.</p>
                  <br/>
                  <img src={image2} height="100%" width="100%"/> 
                  <center>  Legionen 2017 gathered before the new students at an activity. </center>  

                  <br/><br/> 
                  <center><p><strong>Developed skills in: </strong><i> Planning, Cooperation, Leadership, Organization, Creativity, Improvisation and Performing. </i></p></center>           
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
  name: 'labassistant',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
       Lab assistant
      </div>
      <div className='portfolio-item__desc'>
      <h5> Oct 2017-Jan 2018 </h5>
     'Electronic publishing' course
      </div>
      <div className='portfolio-item__icon'>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" href="http://webstaff.itn.liu.se/~nikro27/tnmk30-2018/"><i className="fas fa-globe fa-lg"></i></a>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal21">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal21" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Lab assistant at LiU</h4>
                </div>
                <div className="modal-body">
                  <p>During my second year I had the time to be able to work extra as a lab assistant for the university. 
                  My role here was to guide younger year students through five laborations during the fall.
                  The laborations were structured in a way for the students to get to know the basics of HTML5, CSS3, JS, PHP and finally MySQL. </p>
                  <br/>
                  <img src={image3} height="100%" width="100%"/> 
                  <center> A big part of being a lab assistant is to prepare acquaint yourself with the code of the laborations.</center>  
                  <br/>
                  You can get more information about the laborations <a href="http://webstaff.itn.liu.se/~nikro27/tnmk30-2018/laborationer.php" target="_blank">here</a>.
                  <br/><br/> 
                  <center><p><strong>Developed skills in: </strong><i>Teaching, HTML5, CSS3, JS, PHP and MySQL.</i></p></center> 
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
  name: 'leisure',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Leisure time interests
      </div>
      <div className='portfolio-item__desc'>
      <h5> Birth - Now </h5>
        Film editing, plants, working out
      </div>
      <div className='portfolio-item__icon'>
      </div>
      <div className='portfolio-item__links'>
        <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal22">More</a>
      </div>

      <div className="container">    
          <div className="modal fade" id="myModal22" role="dialog">
            <div className="modal-dialog">                     
              <div className="modal-content">
                <div className="modal-header">                
                  <h4 className="modal-title">Leisure time interests</h4>
                </div>
                <div className="modal-body">
                  <p> I've had numerous interests when growing up and whenever I have free time I try to indulge in them. When I started studying at university I noticed my free time was getting limited. 
                  In between managing my time for studies and other extra curricular activities I find myself often behind a computer screen. It's a stress relief for me and there's a range of things to do. 
                  I can learn something new that isn't related to my degree, watch tv-series & movies or play video-games. It's something that helps me recover and gain new energy for the next day. </p>
                  <br/>

                  <p>It's always fun to learn new things, and luckily for me I've chosen a degree which aligns with a lot of my interests.</p>
                  <br/>
                  <p>I try to live a healthy lifestyle where I eat healthy and exercise as often as I am able to and it has become an interest in itself. 
                  Some weekends I travel either back home to visit family or to Stockholm where the majority of my closest friends live.  </p>
                  <br/>
                  <img src={image}/>

                  <br/><br/> 
                  <center><p><strong>Developed skills in: </strong><i>Adobe Premiere Pro, Adobe After Effects, Cinema4D, Being alive, Planting plants and watering them. </i></p></center> 

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
},   ]