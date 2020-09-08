import React from "react";
import "./style.scss";
import Iframe from "react-iframe";
// Please excuse the extremely messy and annoying hardcoding/importing, will create a new website with headless CMS soon.
import image from "./images/unity.png";

import image16 from "./images/threejs.png";
import image17 from "./images/matlab.png";
import image20 from "./images/trebuchet.png";
import image21 from "./images/csharp.png";
import image22 from "./images/trebuchet2.png";
import image23 from "./images/reactredux.png";
import image24 from "./images/netlogo.png";
import image25 from "./images/old2.png";
import image26 from "./images/new1.PNG";
import image27 from "./images/new2.PNG";
import image28 from "./images/gameplaySS.png";
import image29 from "./images/gameplaySS2.png";
import image30 from "./images/teaserFaceRecog.png";
import image31 from "./images/pythonlogo.png";
import image32 from "./images/flasklogo.png";
import image33 from "./images/vuelogo.png";
import image34 from "./images/gastroliter.png";
import image35 from "./images/finalRender.png";
import image36 from "./images/osllogo.png";
import image37 from "./images/blenderlogo.png";
import image38 from "./images/covid19.png";
import image39 from "./images/cpluspluslogo.png";
import image40 from "./images/lualogo.png";
import image41 from "./images/Qtlogo.png";
import image42 from "./images/heightcurve.PNG";
import image43 from "./images/heightcurvetoolgraph.PNG";
import image44 from "./images/slope2.PNG";
import image45 from "./images/pyongyang.PNG";
import image46 from "./images/pyongyangabove.PNG";
import image47 from "./images/costraster.PNG";
import image48 from "./images/costraster2.PNG";
import image49 from "./images/helicircle.PNG";
import image50 from "./images/findpath.PNG";
import image51 from "./images/opengl.png";
import image52 from "./images/postgresql.png";
import image53 from "./images/bulma-logo.png";
import image54 from "./images/d3.png";
import image55 from "./images/edtouch.png";
import image56 from "./images/edtoucheditcomment.png";
import image57 from "./images/edtouchedits.png";
import image58 from "./images/edtouchfrontpage.png";
import image59 from "./images/edtouchpostfini.png";

export default [
  {
    name: "vricon",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          3D geospatial analysis and visualization tools
        </div>
        <div className="portfolio-item__desc">
          <h5> June 2020 - Aug 2020 </h5>
          Software internship, summer 2020
        </div>
        <div className="portfolio-item__icon">
          <img src={image39} height="50" width="50" alt="c++ logo" />
          <img src={image41} height="50" width="50" alt="qt logo" />

          <img src={image40} height="50" width="50" alt="lua logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.vricon.com/"
          >
            <i className="fas fa-globe fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal17"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal17" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Summer internship at Vricon Systems
                  </h4>
                </div>
                <div className="modal-body">
                  <i>
                    At Vricon I developed several analysis tools using C++ and
                    Qt widgets binded together with Lua-scripts for receiving
                    geodata (GIS), calculating and outputting GeoJSON or
                    Rasters. The result was visualized in their 3D software{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.vricon.com/products/vricon-software/"
                    >
                      Vricon Explorer
                    </a>
                    , one of the most accurate global 3D map representation
                    software available.
                  </i>
                  <br />
                  <br />
                  <p>
                    During the summer of 2020, I was a software intern at Vricon
                    Systems AB, a former joint venture between SAAB and Maxar
                    Technologies until July, when Maxar took full ownership.
                    Vricon specializes in 3D geospatial products and analytics
                    for both the defense and telecommunications industry. Vricon
                    was a company I already had my eyes on in 2019, when they
                    were showcasing their work during a lecture held at my
                    university. The complex applications of 3D computer graphics
                    and visualizations that they presented were incredibly
                    interesting and enforced my initial reasoning of why I chose
                    my M.Sc.
                  </p>
                  <br />
                  <p>
                    There were many challenges during the course of the summer.
                    First and foremost, the codebase was extensive which took a
                    while to get familiar with. Finding how to navigate certain
                    areas of their engine code, learning the pipeline and
                    learning to write Lua-scripts for the first time was
                    confusing at first but it got better. Although I
                    occasionally got stuck on certain problems, I thankfully had
                    extremely competent people around me. I learned a lot about
                    different geographical coordinate systems and how they
                    pertain when working with GIS-data. A lot of inspiration for
                    the tools and methods I implemented were derived from the
                    concepts of the mapping and analytics platform, ArcGIS.{" "}
                  </p>
                  <br />
                  <p>
                    {" "}
                    I also had the pleasure of learning more in detail about
                    what the other R&D departments were working on, even if that
                    involved work different from my main areas of interest. The
                    people working here are really good at what they do, and
                    also are very enthusiastic about it, which of course
                    improved my time there tremendously .{" "}
                  </p>
                  <p>
                    During the summer I was given a list of requested tools,
                    both from the supervisors but also Vricon customers. These
                    tools are highly practical for their users/customers and
                    some of them will be brought in to the next major release of
                    the Explorer software. Personally it has been very
                    satisfying to be able to bring the best quality I can
                    provide, which will later be used in professional settings.
                    The tools operate on for example mesh terrain datasets which
                    are produced using high resolution satellite data, shot from
                    different angles, at up to 30cm/pixel resolution.
                  </p>
                  <br />{" "}
                  <center>
                    <h3>Height curve</h3>{" "}
                  </center>
                  <br />
                  <p>
                    I created the first tool together with the other summer
                    intern as an introductory assignment. The user positions
                    several points in the terrain on different heights and
                    lengths, forming a line. These points are then interpolated
                    differently depending on the geocentric distance between
                    them. For each new point, we use ray tracing from a high and
                    low point (beneath the mesh) at that latitude/longitude, to
                    determine at what altitude the mesh terrain intersects. The
                    altitude is assigned to the point which results is a new
                    line that neatly follows the mesh. <br />
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href={image42}>
                      <img
                        src={image42}
                        height="100%"
                        width="100%"
                        alt="heightcurve"
                      />
                    </a>
                    <br />
                    <center>
                      {" "}
                      The height curve accurately traverses the mountainside of
                      Matterhorn in Switzerland depending on the original line
                      point inputs and selected subdivision.{" "}
                    </center>
                    <br />
                    The points are then plotted on a 2D graph where (x,y) =
                    (length, altitude) which can be observed in the widget
                    toolbar.
                    <br />
                    <br />
                    <a target="_blank" rel="noopener noreferrer" href={image43}>
                      <img
                        src={image43}
                        height="50%"
                        width="50%"
                        alt="heightgraph"
                      />
                    </a>
                    <br />
                    <center>
                      {" "}
                      A 2D graph made with Qt visualizing the altitude and
                      length of the newly created line allows for a better
                      analysis of the terrain.
                    </center>
                    <br />
                  </p>
                  <br />
                  <center>
                    <h3>Slope raster</h3>{" "}
                  </center>
                  <br />
                  <p>
                    {" "}
                    To produce a slope analysis over an area a heightmap is
                    created with pixel values 0-255 stored in a 32 bit float
                    image which represent altitude of that position in the mesh
                    terrain. The gradient of a pixel is calculated by iterating
                    through the heightmap and calculating its
                    horizontal/vertical and diagonal derivative in a 3x3 pixel
                    neighborhood and taking the average of all those values.
                    This average is then used to calculate the angle of that
                    specific pixel. The result is an image which shows the
                    gradient of the mesh, making for a very useful tool to have
                    when dealing with geodata. The concept behind it is heavily
                    based on ArcGIS own{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pro.arcgis.com/en/pro-app/tool-reference/3d-analyst/how-slope-works.htm"
                    >
                      documentation
                    </a>{" "}
                    where they have similar tools in their ArcGIS Pro software.
                    Some inspiration has also been drawn from a very interesting{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://webapps.itc.utwente.nl/librarywww/papers_2009/general/principlesgis.pdf"
                    >
                      book
                    </a>{" "}
                    about the concepts and calculations that are used when
                    working with GIS-data.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image44}>
                    <img
                      src={image44}
                      height="100%"
                      width="100%"
                      alt="sloperaster"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Slope analysis performed on the Botafogo residential area in
                    Rio de Janeiro, Brazil. Pixels range between 0-90 depending
                    on angle in degrees.{" "}
                  </center>
                  <br />
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image45}>
                    <img
                      src={image45}
                      height="100%"
                      width="100%"
                      alt="sloperaster2"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Another slope analysis showing the varying angles portraying
                    the unique architecture of the Ryugyong hotel in Pyongyang,
                    North Korea.{" "}
                  </center>
                  <br />
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image46}>
                    <img
                      src={image46}
                      height="100%"
                      width="100%"
                      alt="sloperaster3"
                    />
                  </a>
                  <br />
                  <center> Another view from above. </center>
                  <br />{" "}
                  <center>
                    <h3>Cost raster</h3>{" "}
                  </center>
                  <br />
                  <p>
                    A cost raster identifies the cost of traveling through each
                    pixel and is created by combining the slope raster together
                    with a classification raster (in the form of a GeoTIFF). The
                    classification raster is a segmented image from which a
                    convolutional neural network has made predictions on. These
                    pixel values represent different specified categories from
                    which a weight will be added onto (the new pixel value used
                    when weighing the cost raster). The user can define the
                    amount of weight a specific category will have in the final
                    image. It is also possible to change an influence factor
                    which will be multiplied to the pixel value, if you want f.e
                    steep slopes to have a larger influence on the raster. The
                    weighted slope and classification data are then added
                    together to create the cost raster. The theory behind this
                    is also inspired by ArcGIS own{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pro.arcgis.com/en/pro-app/tool-reference/spatial-analyst/creating-a-cost-surface-raster.htm"
                    >
                      documentation about creating cost rasters
                    </a>
                    .
                    <br />
                    This raster is especially useful for calculating shortest
                    distance paths between locations, or as I will describe
                    below, finding potential helicopter landing zones in an
                    area.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image47}>
                    <img
                      src={image47}
                      height="100%"
                      width="100%"
                      alt="costraster"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Cost raster analysis performed on Manhattan Island, New
                    York, USA. Here, pixels vary from 0-255 (UInt8 image) where
                    the slope analysis and classification weights have been
                    applied with the classification weights having two times
                    larger influence over the slope data. Click the image for a
                    closer look.
                  </center>
                  <br />
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image48}>
                    <img
                      src={image48}
                      height="100%"
                      width="100%"
                      alt="costraster2"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Another angle with the classification GeoTIFF enabled as a
                    layer below the cost raster.
                  </center>
                  <br />
                  <br />
                  <center>
                    <h3>Finding potential helicopter landing zones</h3>{" "}
                  </center>
                  <br />
                  <p>
                    My last assignment was a sought after analysis to be able to
                    find potential helicopter landing zones over a larger area.
                    The requirements for a potential landing zone would be an
                    area that is large enough for the helicopter to land and the
                    area should be sufficiently flat. The tool uses the slope
                    constrained (thresholded) cost raster as a basis, where only
                    areas under a certain slope angle have real cost. Steeper
                    areas are assigned a max-value and are as a result not
                    considered as a possible landing zone. These areas are
                    determined by first defining a grid over the requested area,
                    iterating through the cost raster to find positions which
                    have the lowest summed neighborhood cost. One grid cell may
                    only contain one zone and a proximity check is done
                    afterwards to filter out zones that are too close to each
                    other. Therefore, the result depends heavily on how the cost
                    raster parameters have been set before-hand.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image49}>
                    <img
                      src={image49}
                      height="100%"
                      width="100%"
                      alt="helicircle"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    An approximative prediction of where a potential helicopter
                    landing zone may be situated. The zones are filtered
                    depending on proximity to avoid several zones close to each
                    other.
                  </center>
                  <br />
                  <br />{" "}
                  <center>
                    <h3>Path finding</h3>{" "}
                  </center>
                  <br />
                  <p>
                    The cost raster can also be used as a measure when finding
                    the shortest path between two positions. My colleague
                    developed the algorithm and the tool but I helped partly as
                    well since it heavily depended on the cost raster analysis.
                    I also thought it would be nice to show an example of it
                    since it works really well!
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image50}>
                    <img
                      src={image50}
                      height="100%"
                      width="100%"
                      alt="pathfinding"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    A* path finding algorithm to find the shortest path between
                    two points, operating on the cost raster with buildings and
                    vegetation set to a higher weight.
                  </center>
                  <br />
                  <p></p>
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: C++ (Qt framework), Lua, processing
                        GIS-data and performing calculations on it to be able to
                        visualize the finished analysis on mesh terrain.
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.vricon.com/"
                  >
                    Vricon website
                  </a>{" "}
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Edtouch",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Edtouch</div>
        <div className="portfolio-item__desc">
          <h5> Apr 2020 - June 2020 </h5>
          Full-stack web platform where users can request edits of images
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <img src={image53} height="70" width="70" alt="bulma logo" />

          <img src={image52} height="60" width="60" alt="postgres logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal16"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal16" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edtouch</h4>
                </div>
                <div className="modal-body">
                  <i>
                    I created a platform for users to request different kinds of
                    image manipulations using React with its Context API, Bulma
                    and PostgreSQL. Course focused mainly on scalability, using
                    several state-of-the art web frameworks in a smart way with
                    a REST API backend.
                  </i>
                  <br />
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image55}>
                    <img
                      src={image55}
                      height="50%"
                      width="50%"
                      alt="covid19dashboard"
                    />
                  </a>
                  <br />

                  <p>
                    For the course 'Advanced Web Programming -{" "}
                    <a
                      href="https://www.ida.liu.se/~TDDD27/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TDDD27
                    </a>
                    ' a friend and I developed a full-stack website where users
                    can create an account, upload requests, comment and favorite
                    edits. The initial idea was to create a platform for
                    companies in the communication industry to hold competitions
                    for logotypess and other graphical design related things.
                    But right now there are no restrictions for regular users to
                    request edits as well. The community can help these
                    companies by providing an idea of a logotype, or an edit of
                    the image which has been retouched in some way. It could
                    also potentially be a place where users express their skills
                    in photo manipulation. An example would be a user requesting
                    to remove an unwanted object from an image or change the
                    background. It could also be as simple as a color retouch.
                    Users can also interact with each other by posting comments
                    on either the requesting post or directly to an edit that
                    someone has created.
                  </p>
                  <br />
                  <p>
                    The front page consists of a grid-like view where the newest
                    requests are displayed with some additional information.
                    When clicked, they redirect to another page where more
                    information is displayed. (Click on the images to view in
                    full resolution)
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image58}>
                    <img
                      src={image58}
                      height="80%"
                      width="80%"
                      alt="edtouchfrontpage"
                    />
                  </a>
                  <br />

                  <p>
                    On every individual post page the image is shown, as well as
                    a more detailed description of the request. On the bottom
                    other users are able to either post a comment, asking for
                    more specific information or if they have any questions.{" "}
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image59}>
                    <img
                      src={image59}
                      height="80%"
                      width="80%"
                      alt="edtouchpost"
                    />
                  </a>
                  <br />
                  <p>
                    If another user has finished their edit of the image they
                    can post it as an edit. Comments and edits on a post can be
                    toggled. If edits are toggled on they are shown in a
                    subgrid, very similarly to the front page. Users can also
                    favorite these by clicking the heart icon, and edits with
                    the highest score will be shown first.{" "}
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image57}>
                    <img
                      src={image57}
                      height="80%"
                      width="80%"
                      alt="edtouchedits"
                    />
                  </a>
                  <br />
                  <p>
                    If one of these edits to a post are clicked a modal will be
                    opened with even further information that the editor has
                    provided. Users can also comment this specific edit if they
                    want to give praise or maybe ask the editor questions.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image56}>
                    <img
                      src={image56}
                      height="80%"
                      width="80%"
                      alt="edtoucheditcomments"
                    />
                  </a>
                  <br />
                  <br />
                  <p>
                    Users create accounts using Auth0 where Google account
                    authorization is supported. For uploading images we used a
                    Cloudinary widget, which also comes with internal
                    transformations performed on the cloud. This is useful when
                    an image is only supposed to be a thumbnail and therefore
                    Cloudinary will scale and downsize the image appropriately.
                    Bulma provided us with an easy way to design the website to
                    fit all media devices. It also comes with its own
                    components, similarly to Material UI. We chose Bulma because
                    it was a new framework for both of us and we had already
                    worked with Material UI.
                  </p>
                  <br />
                  <p>
                    For the backend we chose the ORDBMS PostgreSQL since we were
                    most comfortable with working with SQL. We built a complete
                    REST API and used Axios to dispatch requests to endpoints.
                    We then used Express.JS routes together with the library
                    node-postgres to execute (and pool) SQL queries to the
                    database in a convenient way. Since there are a lot of
                    tables depending on eachother (since Edtouch's posts are
                    linked to it's comments/edits and that edits comments f.e)
                    we had to carefully plan how we wanted to store everything
                    in the database.
                  </p>
                  <br />
                  <p>
                    I really wish I could share the repository here but we have
                    it on a LiU-central GitLab repository storage, meaning only
                    LiU students and employees are allowed access. Although, I
                    can send the code if requested.
                  </p>
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: React with its Context API, the CSS
                        framework Bulma, PostgreSQL. Building and planning a
                        scalable full-stack website platform.
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Edtouch",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Modelling and Animation labs
        </div>
        <div className="portfolio-item__desc">
          <h5> Apr 2020 - June 2020 </h5>
          Series of advanced labs detailing methods for modelling and animating
          virtual objects (TBD)
        </div>
        <div className="portfolio-item__icon">
          <img src={image39} height="50" width="50" alt="c++ logo" />
          <img src={image51} height="60" width="60" alt="opengl logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/FredrikErikJohansson/TNM079"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal15"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal15" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Modelling and Animation labs</h4>
                </div>
                <div className="modal-body">TBD</div>
                <div className="modal-footer">
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "ProceduralCorals",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">COVID-19 Dashboard</div>
        <div className="portfolio-item__desc">
          <h5> Jan 2020 - Feb 2020 </h5>
          Pandemic info-visualization using ArcGIS data
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <img src={image54} height="40" width="40" alt="d3 logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GustafWallstrom/CoVID-19-Visualization"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal14"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal14" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">COVID-19 Dashboard</h4>
                </div>
                <div className="modal-body">
                  <i>
                    I created a interactive dashboard using Javascript, D3.JS,
                    Graph.JS and leaflet.
                  </i>
                  <p>
                    For the course 'Information visualization -{" "}
                    <a
                      href="https://liu.se/studieinfo/en/kurs/tnm048/vt-2018"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TNM048
                    </a>
                    ' I chose to visualize the dataset from ArcGIS containing
                    numeral values from the pandemic. The dataset contained the
                    number of confirmed cases, deaths and recovered individuals.
                    The course goal was to create a visualization of sorts from
                    a dataset with emphasis on user interface and
                    interactability, as well as displaying the information in an
                    intuitive way.
                  </p>
                  <br />
                  <p>
                    The design of the dashboard is heavily influenced by the
                    official ArcGIS dashboard, since me and my project partner
                    wanted to find out the challenges of creating a similar
                    dashboard. The dashboard provides an overview of the data
                    over the world and also features a date slider providing the
                    user the ability to drag through each day from January 28th
                    to June 6th. The dashboard is built using a combination of
                    D3.JS, Leaflet (for mapping GEOJSON features) and vanilla
                    Javascript.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image38}>
                    <img
                      src={image38}
                      height="100%"
                      width="100%"
                      alt="covid19dashboard"
                    />
                  </a>
                  <br />
                  <p>
                    Furthermore, the dashboard has an integrated graph (using
                    Graph.JS) where the user can toggle certain graphs
                    displaying different areas of interest. The graph also
                    contains a linear regression prediction and an exponential
                    one given the most recent data using Regression-js by{" "}
                    <a
                      href="https://github.com/Tom-Alexander/regression-js"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Tom-Alexander
                    </a>
                    .
                  </p>
                  <p>
                    As mentioned before, the course had strong emphasis on
                    different methods of displaying information in a
                    comprehensive and easy-to-use way for the general user.
                    This, combined with dealing with a large dataset gave way
                    for a very interesting (and important) project which
                    sharpened my current JS-skills.
                  </p>
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: Javascript, D3.JS, Graph.JS,
                        Leaflet.JS, Regression.JS, information visualization
                        techniques and principles.{" "}
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <a
                    href="files/InfoVisTNM048.pdf"
                    type="application/pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project report
                  </a>
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/COVID-19/"
                  >
                    Live dashboard
                  </a>{" "}
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "ProceduralCorals",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Procedural corals</div>
        <div className="portfolio-item__desc">
          <h5> Nov 2019 - Dec 2019 </h5>
          Procedural coral mesh generation with OSL shading
        </div>
        <div className="portfolio-item__icon">
          <img src={image36} height="60" width="60" alt="osl logo" />
          <img src={image37} height="100" width="100" alt="blender logo" />{" "}
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samuelllsvensson/Procedural_Corals"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal13"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal13" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Procedural Corals</h4>
                </div>
                <div className="modal-body">
                  <i>
                    I created procedural corals using Lindenmayer systems
                    (L-systems) and Open Shading Lanugage (OSL) in Blender.
                  </i>
                  <p>
                    For the course 'Procedural images -{" "}
                    <a
                      href="http://weber.itn.liu.se/~stegu76/TNM084-2019/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TNM084
                    </a>
                    ' I created procedural corals using procedural methods
                    (primarily noise functions). The aim was to create both hard
                    and soft corals{" "}
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image35}>
                    <img
                      src={image35}
                      height="100%"
                      width="100%"
                      alt="teaserFaceRecog"
                    />
                  </a>
                  <br />
                  <center> Final render of underwater scene </center>
                  <br />
                  <p>
                    {" "}
                    There are three corals, the Staghorn coral which was
                    generated using L-systems, a Leather coral which was created
                    from a hyperbolic plane and also a generic stone coral. All
                    corals have OSL shaders applied to them which uses noise
                    functions to achieve different displacement textures.
                  </p>
                  <p>
                    {" "}
                    I then went on and created an underwater scene using my
                    newly generated corals and created a short animation which
                    can be seen below.{" "}
                  </p>
                  <br />
                  <Iframe
                    url="https://www.youtube.com/embed/8qhO7fpJxr8"
                    width="100%"
                    height="300px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
                  <br /> <br />
                  The project received the following comment from the course
                  examiner and lecturer, professor{" "}
                  <a
                    href="https://liu.se/en/employee/stegu76"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Stefan Gustavsson
                  </a>
                  :<br />
                  <i>
                    {" "}
                    "There is nothing else to do but praise your efforts on all
                    points. You have made three fundamentally different types of
                    coral with procedural methods in Blender and made every
                    single one of them look good. You also described and
                    presented your work in an exemplary manner. Given this, be
                    assured that neither I nor Gabriel (TA) are easy to impress.
                    Great work!"
                  </i>
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: Open Shading Language, Blender,
                        Procedural methods and how to implement shaders with
                        them.{" "}
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <a
                    href="files/Procedurella_projekt.pdf"
                    type="application/pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project report
                  </a>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "GastroLiter",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">GastroLiter</div>
        <div className="portfolio-item__desc">
          <h5> Dec 2019 </h5>
          Abstractive text summarization using deep learning
        </div>
        <div className="portfolio-item__icon">
          <img src={image31} height="90" width="90" alt="python logo" />
          <img src={image32} height="50" width="50" alt="flask logo" />
          <img src={image33} height="50" width="50" alt="vue logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samuelllsvensson/TNM108-Machine-Learning-for-Social-Media"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal12"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal12" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">GastroLiter</h4>
                </div>
                <div className="modal-body">
                  <i>
                    My group used deep learning for abstractive text
                    summarization of Kindle book and Amazon Fine food reviews
                    from Kaggle. We also developed a client/server architecture
                    with Vue, Python Flask and Axios to create a simple RESTful
                    API.{" "}
                  </i>
                  <br />
                  <br />
                  <p>
                    For the course 'Machine learning for social media -
                    <a
                      href="https://liu.se/studieinfo/en/kurs/tnm108/ht-2019"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TNM108
                    </a>
                    ' we learned the basics of most clustering, classification
                    and natural language processing techniques used today. This
                    mini project was completed in about 2 weeks in total,
                    including the final blog-type article necessary for the
                    course. Our group, consisting of three people, decided to
                    create a simple website which would summarize a pasted food
                    or book review using abstractive summarization.{" "}
                  </p>
                  <p>
                    The client consists of a Vue front end which has the form
                    input UI together with the final written article as a
                    tutorial in the about page. The form input is processed into
                    an array of comma-separated strings which is then sent using
                    an Axios POST-request together with Flask. The server-side
                    handles the text and creates a summarization which then is
                    sent back to the client for displaying. Read more about it{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://thomasindrias.netlify.com/creating-abstractive-text-summarization-using-deep-learning"
                    >
                      {" "}
                      here
                    </a>
                  </p>
                  Even though this was a fairly short project I was able to
                  learn Python better and try out a new Javascript framework,
                  Vue. I will certainly use it more in the future.
                  <br /> <br />
                  <a target="_blank" rel="noopener noreferrer" href={image34}>
                    <img
                      src={image34}
                      height="100%"
                      width="100%"
                      alt="teaserFaceRecog"
                    />
                  </a>
                  <br />
                  <center> Home website with input form </center>
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: Python with Flask, Vue, Machine
                        learning algorithms, text summarization techniques.{" "}
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "faceRecog",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Face detection algorithm</div>
        <div className="portfolio-item__desc">
          <h5> Nov 2019 - Dec 2019 </h5>
          Face recognition in a database using image processing
        </div>
        <div className="portfolio-item__icon">
          <img src={image17} height="80" width="80" alt="MATLAB logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samuelllsvensson/Face_Recognition"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal11"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal11" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Face detection algorithm</h4>
                </div>
                <div className="modal-body">
                  <i>
                    My group developed a face recognition algorithm in MATLAB
                    which successfully detected eyes, mouth and skin from facial
                    images in a database.
                  </i>
                  <br />
                  <br />
                  <p>
                    In the course 'Advanced image processing -{" "}
                    <a
                      href="https://liu.se/studieinfo/en/kurs/tnm034/ht-2019"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TNM034
                    </a>
                    ' I and three students developed a face recognition
                    algorithm as a 2 month project. The algorithm accomplishes
                    the following:
                  </p>
                  <ul>
                    <li>- Light compensation</li>
                    <li>- Skin segmentation</li>
                    <li>- Eye and mouth location mapping</li>
                    <li>
                      - Face normalization (translation, rotation, cropping){" "}
                    </li>
                    <li>- Extraction of eigenfaces and feature vectors</li>
                    <li>
                      - Correct matching of similar/same face in given database
                    </li>
                  </ul>
                  <br />
                  <p>
                    The project was very interesting since we were forced to
                    accomplish it without using machine learning which is
                    arguably the most common method used today. Instead we used
                    earlier image processing and analysis knowledge. Several
                    morphological operations were used to help this process.
                  </p>
                  You can read the project report and see the final results
                  below.
                  <br /> <br />
                  <a target="_blank" rel="noopener noreferrer" href={image30}>
                    <img
                      src={image30}
                      height="100%"
                      width="100%"
                      alt="teaserFaceRecog"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Image sequence with parts of the project pipeline.{" "}
                  </center>
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: MATLAB, image and signal
                        processing.{" "}
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <a
                    href="files/Face_recognition_ABoB.pdf"
                    type="application/pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project report
                  </a>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "sunsetSwing",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Sunset Swing mobile game</div>
        <div className="portfolio-item__desc">
          <h5> Sep 2019 - Oct 2019 </h5>
          Casual Android game where you swing around tether points
        </div>
        <div className="portfolio-item__icon">
          <img src={image21} height="50" width="50" alt="csharp logo" />
          <img src={image} height="100" width="100" alt="unity logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal10"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal10" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sunset Swing</h4>
                </div>
                <div className="modal-body">
                  <i>
                    During 1,5 months I developed and designed a casual mobile
                    game with smooth player input and intuitive game mechanics
                    using Unity (C#). It was one of{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://eastswedengame.se/finalister-i-liu-game-awards-2019/"
                    >
                      {" "}
                      ten finalists in the LiU game awards
                    </a>
                    held by{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://eastswedengame.se/"
                    >
                      East Sweden Game
                    </a>
                    .
                  </i>
                  <br />
                  <br />

                  <p>
                    Sunset swing was an Android game made for the course ‘Design
                    and programming of computer games -{" "}
                    <a
                      href="https://www.ida.liu.se/~TDDD23/info/syllabus.en.shtml"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TDDD23
                    </a>
                    ’ where we were given free rein to design and develop our
                    own game. Unlike others, I decided to take on this task
                    alone. The main reason for this was that I felt that I would
                    learn the most if I did everything myself. This included
                    coming up with an idea and figuring out game mechanics,
                    controls, goals, visual feedback etc…{" "}
                  </p>

                  <p>
                    The result was Sunset swing which is a very simple 2,5D
                    mobile game where you control a flying character which
                    tethers, and rotates around points on the map to gain
                    momentum whilst avoiding obstacles. The player simply
                    presses down on the screen and the character will tether
                    itself to the closest tether point and rotate around it
                    until the player releases. There are several different game
                    elements in the game such as bouncy platforms (some of which
                    might break into pieces after one bounce!), spiky traps and
                    walls.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image28}>
                    <img
                      src={image28}
                      height="100%"
                      width="100%"
                      alt="gameplayss"
                    />
                  </a>
                  <br />
                  <center> Gameplay screenshot of player swinging </center>
                  <br />
                  <p>
                    The game has 10 levels with 3 stars on each level. A timer
                    is also used for better feedback and gives the player
                    incentive to complete the level faster. These scores are
                    displayed back in the main menu in the level select for a
                    better overview.
                  </p>

                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image29}>
                    <img
                      src={image29}
                      height="100%"
                      width="100%"
                      alt="gameplayss2"
                    />
                  </a>
                  <br />
                  <center> Gameplay screenshot of player swinging #2 </center>
                  <br />
                  <p>
                    I also decided to create a generic Unity{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://assetstore.unity.com/packages/tools/physics/2-5d-swing-controller-155893"
                    >
                      {" "}
                      asset
                    </a>{" "}
                    of the mechanics so that other developers may use it freely
                    in their games.{" "}
                  </p>
                  <p>
                    All in all, I’m satisfied with the work I managed to do with
                    regards to the short timespan. Sunset swing is probably
                    something I will continue working on because I would very
                    much like it to be published on Play store (and/or App
                    store) in the future.{" "}
                  </p>
                  <br />
                  <Iframe
                    url="https://www.youtube.com/embed/S8k7c-hjwmY"
                    width="100%"
                    height="300px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: Unity, C#, Game design.{" "}
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "summerjob",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">
          Web application in React+Redux with REST API
        </div>
        <div className="portfolio-item__desc">
          <h5> June 2019 - Aug 2019 </h5>
          Software internship, summer 2019
        </div>
        <div className="portfolio-item__icon">
          <img src={image24} height="50" width="50" alt="dotnet logo" />
          <img src={image23} height="100" width="100" alt="reactredux logo" />
        </div>
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="/status-web/">
            <i className="fas fa-globe fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal9"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal9" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    Summer internship at Agricam AB
                  </h4>
                </div>
                <div className="modal-body">
                  <i>
                    At Agricam I developed a front-end web application in
                    React+Redux together with data fetched from a REST API built
                    in ASP.NET.{" "}
                  </i>
                  <br />
                  <br />
                  During the summer of 2019 I was a software intern at{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.agricam.se/"
                  >
                    Agricam AB
                  </a>
                  , an ‘AgTech’ company specializing in analyzing cattle to
                  identify, and prevent early mastitis using thermal cameras.
                  <br />
                  <br />I was tasked with porting an already existing windows
                  application showing different kinds of statuses from all
                  farms. I also decoupled the current evaluation process (which
                  was done inside the status application) so that the only thing
                  the new web application would receive was evaluated,
                  serialized and ready to be used data. I created several
                  controllers which would evaluate custom data transfer objects
                  and serialize them to several JSON-files. The front-end
                  application (built in React+Redux) would then visualize the
                  received data using Google’s
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://material-ui.com/"
                  >
                    {" "}
                    Material-UI
                  </a>{" "}
                  components. The{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dotnet.microsoft.com/apps/aspnet/apis"
                  >
                    Web API
                  </a>{" "}
                  consisted of several GET-requests to fetch relevant site data
                  and route these actions properly depending on the chosen site.{" "}
                  <br />
                  <br />
                  Below is a censored image of the old WPF application
                  displaying general site data. This application was old and not
                  very user-friendly. A new web application would handle all
                  data in a better way but also visualize it with a cleaner UI.
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image25}>
                    <img
                      src={image25}
                      height="100%"
                      width="100%"
                      alt="gameplay"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Detailed report from old WPF status application.{" "}
                  </center>
                  <br />
                  The web application consists of two main pages, an overview of
                  all farms, and a detailed report of all relevant status data
                  fetched from the database. Some of the functionality included:
                  <ul>
                    <li>
                      - Full handling of a serialized JSON-file to select and
                      send relevant data to each component independently
                    </li>
                    <li>- Paging between status reports in time</li>
                    <li>
                      - Implementation of styling, translation and more using
                      React Hooks
                    </li>
                    <li>
                      - Several dispatching Redux actions for every API
                      GET-Request (if needed)
                    </li>
                    <li>- Fully modular for future development</li>
                    <li>
                      - Intuitive UI which allows all people to easily
                      understand and use the application without much prior
                      training.
                    </li>
                    <li>
                      - Internationalization with i18next for enabling
                      localization between chosen languages.
                    </li>
                  </ul>
                  <br />
                  Below are two images showing both the resulting overview page
                  and detailed report containing evaluated status data.
                  <br />
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image26}>
                    <img
                      src={image26}
                      height="100%"
                      width="100%"
                      alt="gameplay"
                    />
                  </a>
                  <br />
                  <center>New overview interface.</center>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image27}>
                    <img
                      src={image27}
                      height="100%"
                      width="100%"
                      alt="gameplay"
                    />
                  </a>
                  <br />
                  <center>New detailed report view.</center>
                  <br />
                  In conclusion, my summer involved a lot of problem-solving,
                  constantly learning new things and finishing a fully-fledged
                  product to be used internally within the organization. I also
                  learned proper coding etiquette, the Git workflow in a
                  professional setting and what developing might look like at a
                  smaller company. In addition to this I did administrational
                  work as well as doing maintenance of the system for all the
                  farms to make sure everything was operational during the
                  summer holidays.
                  <br />
                  <br />
                  <i>
                    To fully show off my work this summer I’ve hosted the
                    application (with censored mock data){" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="/status-web/"
                    >
                      here
                    </a>{" "}
                    for anyone interested to interact with. This version does
                    not use the controllers to call the web API. It simply reads
                    static JSON data for displaying purposes. Not all sites
                    contain data and paging between reports is limited.
                    Furthermore, the implementation is not optimal solely
                    because of time constraints and was not designed to be
                    mobile-friendly.
                  </i>
                  <br />
                  <br />
                  Agricam was very satisfied with my work and offered me a
                  part-time job to partake in upcoming projects this fall.
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>
                        Developed skills in: .NET framework (C#), React, Redux,
                        Material UI v.4.{" "}
                      </strong>
                      <i />
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/status-web/"
                  >
                    Live website
                  </a>{" "}
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "bachelors",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">AR multiplayer mobile game</div>
        <div className="portfolio-item__desc">
          <h5> Jan 2019 - June 2019 </h5>
          ANT WARS, an AR multiplayer game using mobile devices and tablets to
          play
        </div>
        <div className="portfolio-item__icon">
          <img src={image21} height="50" width="50" alt="csharp logo" />
          <img src={image} height="100" width="100" alt="unity logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aneromz/TNM094-ANT-WARS"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    ANT WARS, a multiplayer AR-game using mobile devices and
                    tablets{" "}
                  </h4>
                </div>
                <div className="modal-body">
                  <p>
                    As a bachelor's project I developed an AR multiplayer game
                    together with 5 other students. Players create even teams
                    from 2-8 players where each team has a base to defend. Using
                    only the camera of a mobile device, the player has a limited
                    field of view over the map and has to move around to see
                    better. Between the bases are a number of paths where the
                    players are able to spawn ants using ingame resources. The
                    ants run towards the enemy base and damage it if they reach
                    it. Meanwhile the enemy players are able to squash enemy
                    ants to defend themselves. Random pop-ups giving more
                    resources also add a game element. The map is a 3D-modelled
                    map (made in Blender) with interactive elements and is fixed
                    on f.e a table using in-built markers from Vuforia. Vuforia
                    is a very efficient library for detection of planar markers
                    and camera pose estimation. The gamelogic is implemented
                    using the popular game engine Unity (written in C#). Unity
                    also has their own networking service called UNet which has
                    been utilized to create a client/server architecture to
                    handle connections.
                    <br /> <br />
                    See the final results below.
                  </p>
                  <br />
                  <Iframe
                    url="https://player.vimeo.com/video/345218845"
                    width="100%"
                    height="300px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i>
                        C#, 3D-modelling, AR, Git, Scrum, Software and Agile
                        development, problem-solving.
                      </i>
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <a
                    href="files/kandidatrapport.pdf"
                    type="application/pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project report (Swedish)
                  </a>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "trebuchet",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Trebuchet simulation</div>
        <div className="portfolio-item__desc">
          <h5> Jan 2019 - Mar 2019 </h5>
          Simulated and modeled the physical system of a launching trebuchet
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-js" />
          <img src={image16} height="70" width="70" alt="three.js logo" />
          <img src={image17} height="80" width="80" alt="MATLAB logo" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samuelllsvensson/Trebuchet-simulation"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal1"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal1" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Trebuchet simulation </h4>
                </div>
                <div className="modal-body">
                  <p>
                    As course project in 'Modelling project -{" "}
                    <a
                      href="https://liu.se/studieinfo/kurs/tnm085/vt-2019/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TNM085
                    </a>
                    ' I simulated and animated a trebuchet projectile throw. The
                    main focus of the project is to model the system (using
                    differential equations) and then render it using an
                    appropriate software. Using MATLAB for simulation, the
                    physical system was divided into two subsystems, rotation
                    and translation. Using Eulers step method we were able to
                    determine the projectiles angular, but also translational
                    acceleration, velocity and position during the simulation.
                    The WebGL application was built using Three.js to render a
                    3D-scene together with a GUI to change several parameters of
                    the trebuchet. Using a{" "}
                    <a
                      href="https://www.khronos.org/gltf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      glTF
                    </a>
                    -loader with .glb files I was able to create an effective
                    transmission and loading of the 3D-scene. All objects were
                    modeled in Blender 2.8 which supported glTF exporting.
                  </p>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image20}>
                    <img
                      src={image20}
                      height="100%"
                      width="100%"
                      alt="gameplay"
                    />
                  </a>
                  <br />
                  <center>
                    {" "}
                    Complete 3D rendered simulation scene with adjustable
                    parameters in the GUI.{" "}
                  </center>
                  <br />
                  <a target="_blank" rel="noopener noreferrer" href={image22}>
                    <img
                      src={image22}
                      height="100%"
                      width="100%"
                      alt="gameplay2"
                    />
                  </a>
                  <br />
                  <center> Another angle. </center>
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i>
                        Modelling, Simulation, Javascript, Three.Js, MATLAB,
                        Blender and Git.
                      </i>
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <a
                    href="files/tnm085_report.pdf"
                    type="application/pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project report (Swedish)
                  </a>
                  <br />
                  <br />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/trebuchet-simulation/"
                  >
                    Live website
                  </a>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "portfoliowebsite",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Portfolio website</div>
        <div className="portfolio-item__desc">
          <h5> Oct 2018 - Feb 2019 </h5>
          The website you're looking at right now
        </div>
        <div className="portfolio-item__icon">
          <i className="fab fa-react" />
          <i className="fab fa-js" />
          <i className="fab fa-sass" />
        </div>
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/samuelllsvensson/samuelllsvensson.github.io"
          >
            <i className="fab fa-github fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal2"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal2" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Portfolio website </h4>
                </div>
                <div className="modal-body">
                  <p>
                    I started developing this website to challenge myself and
                    learn more about React. I used some resources from the
                    internet to put together what you are looking at right now
                    using only React and no UI libraries/frameworks. My first
                    encounter with React was through the course 'Communication
                    and User Interfaces -
                    <a
                      href="https://liu.se/studieinfo/kurs/tnm040/ht-2019/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      TNM040
                    </a>
                    ' course during my second year of university. We were
                    introduced to how components, arrow functions and what JSX
                    was. From there I tried (and failed) to create something
                    worthy of displaying. Nevertheless, I learned a lot.
                  </p>
                  <br />

                  <p>
                    Now I'm realizing there's a huge demand for web developers
                    who can use React confidently, as well as other JS
                    frameworks such as Next.js, Vue.js and so on (it never
                    ends). So I thought to myself that I'd make myself a website
                    to display all of my projects and learn as much React as I
                    can on the way. I've always wanted a place to gather all of
                    my work during my studies.
                  </p>
                  <br />

                  <p>
                    I'm a big fan of responsive design so it's no surprise I
                    enjoy using Flexbox to layout everything. It's just too good
                    to skip out on, and almost all browsers support it. Sass is
                    something I'm quite new to but I was able to find valuable
                    resources on how to use breakpoint mixins and apply them to
                    my site.{" "}
                  </p>
                  <br />
                  <p>
                    The CSS Parallax stars in the background (one of my
                    favourite features) are from a CodePen I found{" "}
                    <a
                      href="https://codepen.io/anon/pen/NojZOV?editors=1100"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      here
                    </a>
                    .
                  </p>
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in:</strong>
                      <i> React, Javascript, HTML5, CSS3, Sass and Flexbox. </i>
                    </p>
                  </center>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
