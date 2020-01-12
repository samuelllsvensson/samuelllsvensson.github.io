import React from 'react';
import './style.scss';
import Iframe from 'react-iframe'
// Please excuse the extremely messy and annoying hardcoding/importing, will create a new website with headless CMS soon.
import image from './images/unity.png';
import image2 from './images/cordova.png';
import image4 from './images/firebase.png';
import image5 from './images/database.png';
import image6 from './images/time.png';
import image7 from './images/hundred.jpg';
import image16 from './images/threejs.png';
import image17 from './images/matlab.png';
import image20 from './images/trebuchet.png';
import image21 from './images/csharp.png';
import image22 from './images/trebuchet2.png';
import image23 from './images/reactredux.png';
import image24 from './images/netlogo.png';
import image25 from './images/old2.png';
import image26 from './images/new1.PNG';
import image27 from './images/new2.PNG';
import image28 from './images/gameplaySS.png';
import image29 from './images/gameplaySS2.png';
import image30 from './images/teaserFaceRecog.png';
import image31 from './images/pythonlogo.svg';
import image32 from './images/flasklogo.png';
import image33 from './images/vuelogo.png';
import image34 from './images/gastroliter.png';
import image35 from './images/finalRender.png';
export default [
	{
		name: 'ProceduralCorals',
		render: (
		  <div className='portfolio-item'>
			<div className='portfolio-item__title'>
			Procedural corals
			</div>
			<div className='portfolio-item__desc'>
			<h5> Nov 2019 - Dec 2019 </h5>
				Procedural coral mesh generation with OSL shading
			</div>
			<div className='portfolio-item__icon'>

			</div>
			<div className='portfolio-item__links'>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/Procedural_Corals"><i className="fab fa-github fa-lg"></i> </a>
			  <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal13">More</a>
			</div>
	  
			<div className="container">    
				<div className="modal fade" id="myModal13" role="dialog">
				  <div className="modal-dialog">                     
					<div className="modal-content">
					  <div className="modal-header">                
						<h4 className="modal-title">Procedural Corals</h4>
					  </div>
					  <div className="modal-body">
					  <p>
					  	
					  <i>I created procedural corals using Lindenmayer systems (L-systems) and Open Shading Lanugage (OSL) in Blender.</i>
					  <p>For the course  'Procedural images - <a href="http://weber.itn.liu.se/~stegu76/TNM084-2019/" target="_blank" rel="noopener noreferrer"> TNM084</a>' 
					  I created procedural corals using procedural methods (primarily noise functions). The aim was to create both hard and soft corals  </p>
					  <br/>
					  	<a target="_blank" rel="noopener noreferrer" href={image35}><img src={image35} height="100%" width="100%" alt ="teaserFaceRecog" /></a>
						<br/>            
						<center> Final render of underwater scene </center>
						<br/>
					  <p> There are three corals, the Staghorn coral which was generated using L-systems, a Leather coral which was created from a hyperbolic plane and also a generic stone coral.
						  All corals have OSL shaders applied to them which uses noise functions to achieve different displacement textures. 
					  </p>

					  <p> I then went on and created an underwater scene using my newly generated corals and created a short animation which can be seen below. </p>	
					  <br/> 
						<Iframe url="https://www.youtube.com/embed/8qhO7fpJxr8"
								width="520px"
								height="300px"
								id="myId"
								className="myClassname"
								display="initial"
								position="relative"
								allowFullScreen
						/>
						<br/> <br/> 
						
						<center><p><strong>Developing skills in: Open Shading Language, Blender, Procedural methods and how to implement shaders with them.   </strong><i></i></p></center>
					  </p>
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
	  }, {
		name: 'GastroLiter',
		render: (
		  <div className='portfolio-item'>
			<div className='portfolio-item__title'>
			GastroLiter
			</div>
			<div className='portfolio-item__desc'>
			<h5> Dec 2019 </h5>
				Abstractive text summarization using deep learning
			</div>
			<div className='portfolio-item__icon'>
				<img src={image31} height="100" width="100" alt="python logo"/>
				<img src={image32} height="50" width="50" alt="flask logo"/>
				<img src={image33} height="50" width="50" alt="vue logo"/>
			</div>
			<div className='portfolio-item__links'>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/TNM108-Machine-Learning-for-Social-Media"><i className="fab fa-github fa-lg"></i> </a>
			  <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal12">More</a>
			</div>
	  
			<div className="container">    
				<div className="modal fade" id="myModal12" role="dialog">
				  <div className="modal-dialog">                     
					<div className="modal-content">
					  <div className="modal-header">                
						<h4 className="modal-title">GastroLiter</h4>
					  </div>
					  <div className="modal-body">
					  <p><i>
					  	My group used deep learning for abstractive text summarization of Kindle book and Amazon Fine food reviews from Kaggle. 
						  We also developed a client/server architecture with Vue, Python Flask and Axios to create a simple RESTful API. </i><br/><br/>

						<p>For the course 'Machine learning for social media -<a href="https://liu.se/studieinfo/en/kurs/tnm108/ht-2019" target="_blank" rel="noopener noreferrer"> TNM108</a>' we learned the basics of most clustering, classification and natural language processing techniques used today. 
						This mini project was completed in about 2 weeks in total, including the final blog-type article necessary for the course. 
						Our group, consisting of three people, decided to create a simple website which would summarize a pasted food or book review using abstractive summarization. </p>

						<p>The client consists of a Vue front end which has the form input UI together with the final written article as a tutorial in the about page. 
							The form input is processed into an array of comma-separated strings which is then sent using an Axios POST-request together with Flask. 
							The server-side handles the text and creates a summarization which then is sent back to the client for displaying. 
							Read more about it <a target="_blank" rel="noopener noreferrer" href="https://thomasindrias.netlify.com/creating-abstractive-text-summarization-using-deep-learning"> here</a></p>

						Even though this was a fairly short project I was able to learn Python better and try out a new Javascript framework, Vue. I will certainly use it more in the future. 

						<br/> <br/> 
						<a target="_blank" rel="noopener noreferrer" href={image34}><img src={image34} height="100%" width="100%" alt ="teaserFaceRecog" /></a>
						<br/>            
						<center> Home website with input form </center>
						<br/>
						<center><p><strong>Developing skills in: Python with Flask, Vue, Machine learning algorithms, text summarization techniques.   </strong><i></i></p></center>
					  </p>
					  </div>
					  <div className="modal-footer">
					  	<a href="files/Procedurella_projekt.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" >Project report</a><br/><br/>
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					  </div>
					</div>  
				  </div>
				</div>        
			  </div>
	  
		  </div>
		)
	  }, {
		name: 'faceRecog',
		render: (
		  <div className='portfolio-item'>
			<div className='portfolio-item__title'>
			Face detection algorithm
			</div>
			<div className='portfolio-item__desc'>
			<h5> Nov 2019 - Dec 2019 </h5>
			  Face recognition in a database using image processing
			</div>
			<div className='portfolio-item__icon'>
				<img src={image17} height="80" width="80" alt="MATLAB logo"/>
			</div>
			<div className='portfolio-item__links'>
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/Face_Recognition"><i className="fab fa-github fa-lg"></i> </a>
			  <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal11">More</a>
			</div>
	  
			<div className="container">    
				<div className="modal fade" id="myModal11" role="dialog">
				  <div className="modal-dialog">                     
					<div className="modal-content">
					  <div className="modal-header">                
						<h4 className="modal-title">Face detection algorithm</h4>
					  </div>
					  <div className="modal-body">
					  <p><i>
					  	My group developed a face recognition algorithm in MATLAB which successfully detected eyes, mouth and skin from facial images in a database. 
						</i><br/><br/>
						<p>In the course 'Advanced image processing - <a href="https://liu.se/studieinfo/en/kurs/tnm034/ht-2019" target="_blank" rel="noopener noreferrer"> TNM034</a>' I and three students developed a face recognition algorithm as a 2 month project. 
						The algorithm accomplishes the following:</p>
						<ul> 
							<li>- Light compensation</li>
							<li>- Skin segmentation</li>
							<li>- Eye and mouth location mapping</li>
							<li>- Face normalization (translation, rotation, cropping) </li>
							<li>- Extraction of eigenfaces and feature vectors</li>
							<li>- Correct matching of similar/same face in given database</li>
						</ul>
						<br/>
						<p>The project was very interesting since we were forced to accomplish it without using machine learning which is arguably the most common method used today. 
						Instead we used earlier image processing and analysis knowledge. Several morphological operations were used to help this process.</p>

						You can read the project report and see the final results below. 
						<br/> <br/> 
						<a target="_blank" rel="noopener noreferrer" href={image30}><img src={image30} height="100%" width="100%" alt ="teaserFaceRecog" /></a>
						<br/>            
						<center> Image sequence with parts of the project pipeline. </center>
						<br/>
						<center><p><strong>Developing skills in: MATLAB, image and signal processing.  </strong><i></i></p></center>
					  </p>
					  </div>
					  <div className="modal-footer">
					  	<a href="files/Face_recognition_ABoB.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" >Project report</a><br/><br/>
						<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					  </div>
					</div>  
				  </div>
				</div>        
			  </div>
	  
		  </div>
		)
	  },{
		name: 'sunsetSwing',
		render: (
		  <div className='portfolio-item'>
			<div className='portfolio-item__title'>
				Sunset Swing mobile game
			</div>
			<div className='portfolio-item__desc'>
			<h5> Sep 2019 - Oct 2019 </h5>
			  Casual Android game where you swing around tether points
			</div>
			<div className='portfolio-item__icon'>
				<img src={image21} height="50" width="50" alt="csharp logo"/>
				<img src={image} height="100" width="100" alt="unity logo"/>
			</div>
			<div className='portfolio-item__links'>
			  <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal10">More</a>
			</div>
	  
			<div className="container">    
				<div className="modal fade" id="myModal10" role="dialog">
				  <div className="modal-dialog">                     
					<div className="modal-content">
					  <div className="modal-header">                
						<h4 className="modal-title">Sunset Swing</h4>
					  </div>
					  <div className="modal-body">
					  <p><i>
						During 1,5 months I developed and designed a casual mobile game with smooth player input and intuitive game mechanics using Unity (C#). 
						It was one of <a target="_blank" rel="noopener noreferrer" href="http://eastswedengame.se/finalister-i-liu-game-awards-2019/"> ten finalists in the LiU game awards</a> 
						held by <a target="_blank" rel="noopener noreferrer" href="http://eastswedengame.se/">East Sweden Game</a>.</i><br/><br/>

						<p>Sunset swing was an Android game made for the course ‘Design and programming of computer games - <a href="https://www.ida.liu.se/~TDDD23/info/syllabus.en.shtml" target="_blank" rel="noopener noreferrer"> TDDD23</a>’ where we were given free rein to design and develop our own game. 
						Unlike others, I decided to take on this task alone. The main reason for this was that I felt that I would learn the most if I did everything myself. 
						This included coming up with an idea and figuring out game mechanics, controls, goals, visual feedback etc… </p>

						<p>The result was Sunset swing which is a very simple 2,5D mobile game where you control a flying character which tethers, 
						and rotates around points on the map to gain momentum whilst avoiding obstacles. 
						The player simply presses down on the screen and the character will tether itself to the closest tether point and rotate around it until the player releases. 
						There are several different game elements in the game such as bouncy platforms (some of which might break into pieces after one bounce!), spiky traps and walls.</p> 
						<br/> 
						<a target="_blank" rel="noopener noreferrer" href={image28}><img src={image28} height="100%" width="100%" alt ="gameplayss" /></a>
						<br/>            
						<center> Gameplay screenshot of player swinging </center>
						<br/>
						<p>The game has 10 levels with 3 stars on each level. 
						A timer is also used for better feedback and gives the player incentive to complete the level faster. 
						These scores are displayed back in the main menu in the level select for a better overview.</p>
						
						<br/> 
						<a target="_blank" rel="noopener noreferrer" href={image29}><img src={image29} height="100%" width="100%" alt ="gameplayss2" /></a>
						<br/>            
						<center> Gameplay screenshot of player swinging #2  </center>
						<br/>
						<p>I also decided to create a generic Unity <a target="_blank" rel="noopener noreferrer" href="https://assetstore.unity.com/packages/tools/physics/2-5d-swing-controller-155893"> asset</a> of the mechanics so that other developers may use it freely in their games. </p> 
						<p>All in all, I’m satisfied with the work I managed to do with regards to the short timespan. 
						Sunset swing is probably something I will continue working on because I would very much like it to be published on Play store (and/or App store) in the future. </p> 
						<br/> 
						<Iframe url="https://www.youtube.com/embed/S8k7c-hjwmY"
								width="520px"
								height="300px"
								id="myId"
								className="myClassname"
								display="initial"
								position="relative"
								allowFullScreen
						/>
						<br/><br/>
						<center><p><strong>Developing skills in: Unity, C#, Game design.  </strong><i></i></p></center>
					  </p>
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
	  }, {
	name: 'summerjob',
	render: (
	  <div className='portfolio-item'>
		<div className='portfolio-item__title'>
			Web application in React+Redux with REST API
		</div>
		<div className='portfolio-item__desc'>
		<h5> June 2019 - Aug 2019 </h5>
		  Software internship, summer 2019
		</div>
		<div className='portfolio-item__icon'>
		  <img src={image24} height="50" width="50" alt="dotnet logo"/>
		  <img src={image23} height="100" width="100" alt="reactredux logo"/>
		</div>
		<div className='portfolio-item__links'>
		  <a target="_blank" rel="noopener noreferrer" href="/status-web/"><i className="fas fa-globe fa-lg"></i> </a>
		  <a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal9">More</a>
		</div>
  
		<div className="container">    
			<div className="modal fade" id="myModal9" role="dialog">
			  <div className="modal-dialog">                     
				<div className="modal-content">
				  <div className="modal-header">                
					<h4 className="modal-title">Summer internship at Agricam AB</h4>
				  </div>
				  <div className="modal-body">
				  <p><i>At Agricam I developed a front-end web application in React+Redux together with data fetched from a REST API built in ASP.NET. </i><br/><br/>
				  	During the summer of 2019 I was a software intern at <a target="_blank" rel="noopener noreferrer" href="https://www.agricam.se/">Agricam AB</a>, an ‘AgTech’ company specializing in analyzing cattle to identify, and prevent early mastitis using thermal cameras.<br/><br/>
					I was tasked with porting an already existing windows application showing different kinds of statuses from all farms. 
					I also decoupled the current evaluation process (which was done inside the status application) so that the only thing the new web application would receive was evaluated, serialized and ready to be used data.  
					I created several controllers which would evaluate custom data transfer objects and serialize them to several JSON-files. 
					The front-end application (built in React+Redux) would then visualize the received data using Google’s 
					<a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/"> Material-UI</a> components. 
					The <a target="_blank" rel="noopener noreferrer" href="https://dotnet.microsoft.com/apps/aspnet/apis">Web API</a> consisted of several GET-requests to fetch relevant site data and route these actions properly depending on the chosen site. <br/><br/>
					Below is a censored image of the old WPF application displaying general site data. This application was old and not very user-friendly. 
					A new web application would handle all data in a better way but also visualize it with a cleaner UI. 
					</p>
					<br/> 
					<a target="_blank" rel="noopener noreferrer" href={image25}><img src={image25} height="100%" width="100%" alt ="gameplay" /></a>
					<br/>            
					<center> Detailed report from old WPF status application.  </center>
					<br/>
					The web application consists of two main pages, an overview of all farms, and a detailed report of all relevant status data fetched from the database. 
					Some of the functionality included:
					<ul> 
						<li>- Full handling of a serialized JSON-file to select and send relevant data to each component independently</li>
						<li>- Paging between status reports in time</li>
						<li>- Implementation of styling, translation and more using React Hooks</li>
						<li>- Several dispatching Redux actions for every API GET-Request (if needed)</li>
						<li>- Fully modular for future development</li>
						<li>- Intuitive UI which allows all people to easily understand and use the application without much prior training.</li>
						<li>- Internationalization with i18next for enabling localization between chosen languages.</li>
					</ul>
					<br/>
					Below are two images showing both the resulting overview page and detailed report containing evaluated status data. 
					<br/><br/>
					<a target="_blank" rel="noopener noreferrer" href={image26}><img src={image26} height="100%" width="100%" alt ="gameplay" /></a>
					<br/>            
					<center>New overview interface.</center>
					<br/>
					<a target="_blank" rel="noopener noreferrer" href={image27}><img src={image27} height="100%" width="100%" alt ="gameplay" /></a>
					<br/>            
					<center>New detailed report view.</center>
					<br/>
					In conclusion, my summer involved a lot of problem-solving, constantly learning new things and finishing a fully-fledged product to be used internally within the organization. I also learned proper coding etiquette, the Git workflow in a professional setting and what developing might look like at a smaller company. 
					In addition to this I did administrational work as well as doing maintenance of the system for all the farms to make sure everything was operational during the summer holidays.
					<br/><br/>
					<i>
					To fully show off my work this summer I’ve hosted the application (with censored mock data) <a target="_blank" rel="noopener noreferrer" href='/status-web/'>here</a> for anyone interested to interact with. 
					This version does not use the controllers to call the web API. It simply reads static JSON data for displaying purposes. 
					Not all sites contain data and paging between reports is limited. 
					Furthermore, the implementation is not optimal solely because of time constraints and was not designed to be mobile-friendly. 
					</i>
					<br/><br/>
					Agricam was very satisfied with my work and offered me a part-time job to partake in upcoming projects this fall. 
					<br/><br/>
					 <center><p><strong>Developing skills in: .NET framework (C#), React, Redux, Material UI v.4.  </strong><i></i></p></center>
				  </div>
				  <div className="modal-footer">
				  	<a target="_blank" rel="noopener noreferrer" href='/status-web/'>Live website</a> <br/><br/>
					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
				  </div>
				</div>  
			  </div>
			</div>        
		  </div>
  
	  </div>
	)
  }, {
  name: 'bachelors',
  render: (
	<div className='portfolio-item'>
	  <div className='portfolio-item__title'>
		AR multiplayer mobile game 
	  </div>
	  <div className='portfolio-item__desc'>
	  <h5> Jan 2019 - June 2019 </h5>
		ANT WARS, an AR multiplayer game using mobile devices and tablets to play
	  </div>
	  <div className='portfolio-item__icon'>
		<img src={image21} height="50" width="50" alt="csharp logo"/>
		<img src={image} height="100" width="100" alt="unity logo"/>
	  </div>
	  <div className='portfolio-item__links'>
		<a target="_blank" rel="noopener noreferrer" href="https://github.com/aneromz/TNM094-ANT-WARS"><i className="fab fa-github fa-lg"></i> </a>
		<a target="_blank" rel="noopener noreferrer" data-toggle="modal" data-target="#myModal">More</a>
	  </div>

	  <div className="container">    
		  <div className="modal fade" id="myModal" role="dialog">
			<div className="modal-dialog">                     
			  <div className="modal-content">
				<div className="modal-header">                
				  <h4 className="modal-title">ANT WARS, a multiplayer AR-game using mobile devices and tablets </h4>
				</div>
				<div className="modal-body">
				  <p>As a bachelor's project I developed an AR multiplayer game together with 5 other students. 
				  Players create even teams from 2-8 players where each team has a base to defend. Using only the camera of a mobile device, the player has a limited field of view over the map and has to move around to see better. 
				  Between the bases are a number of paths where the players are able to spawn ants using ingame resources. The ants run towards the enemy base and damage it if they reach it. 
				  Meanwhile the enemy players are able to squash enemy ants to defend themselves. Random pop-ups giving more resources also add a game element. 
				  The map is a 3D-modelled map (made in Blender) with interactive elements and is fixed on f.e a table using in-built markers from Vuforia. Vuforia is a very efficient library for detection of planar markers and camera pose estimation.
				  The gamelogic is implemented using the popular game engine Unity (written in C#). 
				  Unity also has their own networking service called UNet which has been utilized to create a client/server architecture to handle connections. 
				  <br/> <br/>
				  See the final results below. 
				   </p>
				   <br/> 
				   <Iframe url="https://player.vimeo.com/video/345218845"
				        width="520px"
				        height="300px"
				        id="myId"
				        className="myClassname"
				        display="initial"
				        position="relative"
				        allowFullScreen
				  />
				  <br/><br/>
				   <center><p><strong>Developing skills in: </strong><i>C#, 3D-modelling, AR,  Git, Scrum, Software and Agile development, problem-solving.</i></p></center>
				</div>
				<div className="modal-footer">
				  <a href="files/kandidatrapport.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" >Project report (Swedish)</a><br/><br/>
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
		Trebuchet simulation
	  </div>
	  <div className='portfolio-item__desc'>
	  <h5> Jan 2019 - Mar 2019 </h5>
		Simulated and modeled the physical system of a launching trebuchet
	  </div>
	  <div className='portfolio-item__icon'>
		<i className="fab fa-js"></i>  
		<img src={image16} height="70" width="70" alt="three.js logo"/>
		<img src={image17} height="80" width="80" alt="MATLAB logo"/>
	  </div>
	  <div className='portfolio-item__links'>
		<a target="_blank" rel="noopener noreferrer" href="https://github.com/samuelllsvensson/Trebuchet-simulation"><i className="fab fa-github fa-lg"></i> </a>
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
				  <p>As course project in 'Modelling project - <a href="https://liu.se/studieinfo/kurs/tnm085/vt-2019/" target="_blank" rel="noopener noreferrer"> TNM085</a>' 
				  I simulated and animated a trebuchet projectile throw. 
				  The main focus of the project is to model the system (using differential equations) and then render it using an appropriate software.  
				  Using MATLAB for simulation, the physical system was divided into two subsystems, rotation and translation. Using Eulers step method we were able to determine the projectiles angular, but also translational acceleration, velocity and position during the simulation.
				  The WebGL application was built using Three.js to render a 3D-scene together with a GUI to change several parameters of the trebuchet. 
				  Using a <a href="https://www.khronos.org/gltf/" target="_blank" rel="noopener noreferrer" >glTF</a>-loader with .glb files I was able to create an effective transmission and loading of the 3D-scene. 
				  All objects were modeled in Blender 2.8 which supported glTF exporting. 
				  </p>
				  <br/>
				  <a target="_blank" rel="noopener noreferrer" href={image20}><img src={image20} height="100%" width="100%" alt ="gameplay" /></a>
				  <br/>            
				  <center> Complete 3D rendered simulation scene with adjustable parameters in the GUI.  </center>
				  <br/>
				  <a target="_blank" rel="noopener noreferrer" href={image22}><img src={image22} height="100%" width="100%" alt ="gameplay2" /></a>
				  <br/>            
				  <center> Another angle.  </center>
				  <br/>
				  <center><p><strong>Developing skills in: </strong><i>Modelling, Simulation, Javascript, Three.Js, MATLAB, Blender and Git.</i></p></center>
				</div>
				<div className="modal-footer">
					<a href="files/tnm085_report.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" >Project report (Swedish)</a><br/><br/>
				  <a target="_blank" rel="noopener noreferrer" href='/trebuchet-simulation/'>Live website</a>
				  <br/><br/>
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
				  <a target="_blank" rel="noopener noreferrer" href={image5}><img src={image5} height="100%" width="100%" alt="firebase tree"/></a>
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

				  <a target="_blank" rel="noopener noreferrer" href={image6}><img src={image6} height="80%" width="80%" alt="100 dagar"/></a>
				  <center>  Short snip of code that displayed current date and how many days were left. </center>  
				  <br/>

				  <p>Memento.js is a useful library to manipulate Javascript dates into useful formats, and it comes with multi-language support. 
				  I used this to display how many days there was left until we could see eachother again and what today's date was. </p>
				  <br/>

				  <p>Finally I packaged my app into an .apk using <a href="https://build.phonegap.com/" target="_blank" rel="noopener noreferrer">Adobe Phonegap Build</a>. </p>
				  <br/>

				  <a target="_blank" rel="noopener noreferrer" href={image7}><img src={image7} height="50%" width="50%" alt="finished app"/></a>
				  <br/>
				  <center>  Finished app the day before departure. </center>  
				  <br/>
				   
				  <p>This project was a great learning opportunity and it was extremely satisfying to solve some of the problems I faced, like querying the database in the correct way. 
				  <br/> <br/>
				  Here is a short walkthrough of how the app works (translated to english and with example text/images for privacy purposes).
				  <br/> <br/>
				  <Iframe url="https://www.youtube.com/embed/c3KX1I5SiVI"
				        width="560px"
				        height="315px"
				        id="myId"
				        className="myClassname"
				        display="initial"
				        position="relative"
				        allowFullScreen
				  />
				  </p>
				  <br/><br/>
				  <center><p><strong>Developed skills in: </strong><i> Google Firebase, Javascript (and Memento.js), jQuery, Apache Cordova, Adobe Phonegap, HTML5, and CSS3.</i></p></center>
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
}
]