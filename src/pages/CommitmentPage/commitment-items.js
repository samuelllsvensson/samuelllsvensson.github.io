import React from "react";
import image4 from "./cygnipåsk.jpg";
import image3 from "./labass.jpg";
import image2 from "./legionen.jpeg";
import image5 from "./lithehacklogo.png";
import image6 from "./lithehackpic.jpg";
export default [
  {
    name: "Labassistant",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Lab assistant</div>
        <div className="portfolio-item__desc">
          <h5> Sep 2020 - Oct 2020 </h5>
          First C++ programming course
        </div>
        <div className="portfolio-item__icon" />
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://weber.itn.liu.se/~aidvi05/courses/10/index.html"
          >
            <i className="fas fa-globe fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModa24"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModa24" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Lab assistant</h4>
                </div>
                <div className="modal-body">
                  <p>
                    During the start of my fifth year, I assisted first year
                    students in their introductory programming course given in
                    C++. The course is set up in a way such that students whom
                    have never programmed before should be able to complete it.
                    Therefore a large emphasis on pedagogic skills is required
                    as well as the ability to explain basic programming concepts
                    in a easy to understand way. The course involves writing
                    console applications, iteration methods, STL-containers, how
                    functions are written (and how to overload them) and finally
                    how to read/write to text files.{" "}
                  </p>
                  <p>
                    Because of the pandemic, the work consisted of keeping two 4
                    hour long sessions every week. One session was for guidance
                    regarding the assignment and the other one would be for
                    showcasing the solution for grading. The job consisted also
                    of me creating several tutorial videos on how to install and
                    set up Visual Studio and CMake for both Windows and MacOS.
                    It was a fun way to spend my extra time during my last
                    semester before starting my Master's thesis!
                  </p>
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i>
                        {" "}
                        Pedagogics and refreshed basic C++ concepts as well as
                        how to explain them in a good way.{" "}
                      </i>
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
    name: "lithehack",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">LiTHehack</div>
        <div className="portfolio-item__desc">
          <h5> Sep 2019 - June 2020 </h5>
          Programming mentorship for other students
        </div>
        <div className="portfolio-item__icon" />
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://lithehack.se/"
          >
            <i className="fas fa-globe fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal24"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal24" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">LiTHehack</h4>
                </div>
                <div className="modal-body">
                  <p>
                    LiTHehack is a student driven initiative aiming to help
                    students at Linköping University with programming.
                  </p>
                  <br />
                  Many first year students arrive without any prior programming
                  experience, while some have. LiTHehack was founded in 2013 by
                  a group of students who wanted to support students with both
                  studies and hobby projects. At the Media technology programme
                  first year students take a programming course each
                  period/quarter to create a good foundation for the later
                  years. These courses are often taught in very different
                  languages which can complicate things and that's why LiTHehack
                  exists as an aid.
                  <br />
                  <br />
                  <img
                    src={image5}
                    height="70%"
                    width="70%"
                    alt="lithehacklogo"
                  />
                  <br />
                  <br />
                  Every tuesday and thursdays, in a computer lab, two LiTHehack
                  mentors are available to help other students. Anyone is
                  offered guidance whether it’s a school assignment, laboration
                  or just a personal project. As a mentor we are paid and
                  employed by Linköpings University, very similarly as with my
                  lab assistant/TA commitment during my second year.
                  <br />
                  <br />
                  As a LiTHehack member we are responsible with keeping close
                  contact with the university's IT-department if there is a need
                  to update certain software on the computers in the lab. We
                  also arrange several events for the students during the year
                  such as competitions (sponsored by companies) or in the form
                  of lectures regarding something coding related.
                  <br />
                  <br />
                  <img
                    src={image6}
                    height="60%"
                    width="60%"
                    alt="lithehackpicture"
                  />
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i>
                        {" "}
                        Pedagogics, various programming languages and concepts.{" "}
                      </i>
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
    name: "cygni",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Student Brand Manager</div>
        <div className="portfolio-item__desc">
          <h5> Apr 2018 - Now </h5>
          Student ambassador for the IT-consultant company Cygni
        </div>
        <div className="portfolio-item__icon" />
        <div className="portfolio-item__links">
          <a target="_blank" rel="noopener noreferrer" href="https://cygni.se/">
            <i className="fas fa-globe fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal25"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal25" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Cygni</h4>
                </div>
                <div className="modal-body">
                  <p>
                    I have had the pleasure (since April of 2018) to work as a
                    student ambassador for the IT-consultant company Cygni. With
                    this opportunity I'm able to get a first hand view of how
                    it's like to work as a consultant doing something that I
                    would very much like to do in the future, code.
                    <br />
                    My duties are to represent the company while on campus and
                    on different fairs like LINK (Arbetsmarknadsdagarna inom
                    data och IT på LiU) and MTD (Medieteknikdagarna). I help
                    plan stand-alone events hosted by the company and in return
                    I get to travel to Stockholm couple of times every semester
                    to attend consultant meetings, activities and conferences.{" "}
                  </p>
                  <br />
                  <img src={image4} height="100%" width="100%" alt="cygniMTD" />
                  <br />
                  <center>
                    {" "}
                    Representing Cygni at the annual media technology fair days
                    '
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.medieteknikdagarna.se/"
                    >
                      {" "}
                      MTD{" "}
                    </a>
                    '.{" "}
                  </center>
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i> Planning, Networking and Coordinating. </i>
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
    name: "legionen",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Legionen</div>
        <div className="portfolio-item__desc">
          <h5> Jan 2017 - Jan 2018 </h5>
          Volunteered during the welcoming of the new students
        </div>
        <div className="portfolio-item__icon" />
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.legionen.nu"
          >
            <i className="fas fa-globe fa-lg" />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModa20"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModa20" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Legionen 2017</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Legionen is part of the Welcoming Committee for LinTek.
                    LinTek is the Student Union for the Institute of Technology
                    at Linköping University. In Legionen I was responsible for
                    the sittings during the welcoming weeks for the new students
                    in August 2017. Part of being a 'phadderist' is to grow your
                    beard and dress up in costume. Mostly to become a topic of
                    conversation between the new students that are getting to
                    know eachother. We performed during the first few weeks
                    while we lead the activities and performed at the
                    pre-parties.
                  </p>
                  <br />
                  <img src={image2} height="100%" width="100%" alt="legionen" />
                  <br />
                  <center>
                    {" "}
                    Legionen 2017 gathered before the new students at an
                    activity.{" "}
                  </center>

                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i>
                        {" "}
                        Planning, Cooperation, Leadership, Organization,
                        Creativity, Improvisation and Performing.{" "}
                      </i>
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
    name: "labassistant",
    render: (
      <div className="portfolio-item">
        <div className="portfolio-item__title">Lab assistant</div>
        <div className="portfolio-item__desc">
          <h5> Oct 2017 - Jan 2018 </h5>
          'Electronic publishing' course
        </div>
        <div className="portfolio-item__icon" />
        <div className="portfolio-item__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://webstaff.itn.liu.se/~nikro27/tnmk30-2018/"
          >
            <i className="fas fa-globe fa-lg" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            data-toggle="modal"
            data-target="#myModal21"
          >
            More
          </a>
        </div>

        <div className="container">
          <div className="modal fade" id="myModal21" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Lab assistant/TA at LiU</h4>
                </div>
                <div className="modal-body">
                  <p>
                    During my second year I had the time to be able to work
                    extra as a lab assistant for the university. My role here
                    was to guide younger year students through five laborations
                    during the fall. The laborations were structured in a way
                    for the students to get to know the basics of HTML5, CSS3,
                    JS, PHP and finally MySQL.{" "}
                  </p>
                  <br />
                  <img
                    src={image3}
                    height="100%"
                    width="100%"
                    alt="labassistant"
                  />
                  <br />
                  <center>
                    {" "}
                    A big part of being a lab assistant is to acquaint yourself
                    with the code of the laborations held during the course.
                  </center>
                  <br />
                  For further information about the laborations, click{" "}
                  <a
                    href="http://webstaff.itn.liu.se/~nikro27/tnmk30-2018/laborationer.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                  <br />
                  <br />
                  <center>
                    <p>
                      <strong>Developed skills in: </strong>
                      <i>Teaching, HTML5, CSS3, JS, PHP and MySQL.</i>
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
