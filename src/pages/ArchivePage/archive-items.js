import React from 'react';
import './style.scss';
import Iframe from 'react-iframe'
import image18 from './images/ae.png';
import image19 from './images/premiere.png';


export default [{
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
		  <img src={image18} height="40" width="40" alt="After Effects"/>     
		  <img src={image19} height="40" width="40" alt="Premiere Pro"/>     
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
					Watch the short film below.
					<br/> <br/>	    
					<Iframe url="https://player.vimeo.com/video/194536185"
						  width="520px"
						  height="300px"
						  id="myId"
						  className="myClassname"
						  display="initial"
						  position="relative"
						  allowFullScreen
					/>
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