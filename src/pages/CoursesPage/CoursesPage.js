import React from "react";
import PropTypes from "prop-types";
import ScrollToPrevious from "@components/ScrollToPrevious";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./style.scss";

const useRowStyles = makeStyles({
  root: {
    colorPrimary: "#e17421",
    colorAlternate: "#333333",
    textPrimary: "#ffffff",
  },
});

function createData(code, name, date, description) {
  return {
    code,
    name,
    date,
    description,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            style={{
              color: "#ffffff",
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          style={{
            color: "#ffffff",
          }}
        >
          {row.code}
        </TableCell>
        <TableCell
          style={{
            color: "#ffffff",
          }}
        >
          {row.name}
        </TableCell>
        <TableCell
          style={{
            color: "#ffffff",
          }}
          align="right"
        >
          {row.date}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, color: "#ffffff" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableBody
                  style={{
                    fontSize: "10pt",
                  }}
                  align="center"
                >
                  {row.description}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "TNA001",
    "Foundation Course in Mathematics",
    "Aug 2016 - Oct 2016",
    "Algebraic expessions, inequalities, modulus, complex numbers. Solving equations. Functions and graphs. Definitions and properties of the elementary functions: natural logarithm, exponential function, power function, trigonometric functions, inverse trigonometric funktions and complex exponential function. The Euler formulas. Basic principles of logic. Different types of proof techniques. Vectors and coordinate systems in the plane. Polar coordinates. Lines and circles. The complex plane. Complex numbers in polar form."
  ),
  createData(
    "TND012",
    "Programming",
    "Sep 2016 - Oct 2016",
    "Introduce students to how to develop and structure a program. Basic types: int, double, bool, char. Variables, declarations, and expressions. If-statements and loops. Sequences: search and sorting. Functions. Functions declaration and definition. Functions that return no value. Call-by-value and call-by-reference. Scope and visibility rules. Structuring the code in header (.h) and source (.cpp) files. Records (struct). Input/output. Files. Basic standard C++ libraries."
  ),
  createData(
    "TNM088",
    "Digital Media",
    "Sep 2016 - Dec 2016",
    "The course is based on the area blocks imaging, graphics, film/video, audio and publishing. Further, the course includes a communication track, allowing the students to practice their oral and written communication skills."
  ),
  createData(
    "TNA002",
    "Linear Algebra",
    "Oct 2016 - Dec 2016",
    "Vectors, straight lines and planes. Linear systems of equations. Matrices and determinants. Vector spaces. Euclidean spaces. Linear mappings. Isometric and symmetric mappings. Eigenvalues and eigenvectors. Diagonalization. Otrhogonality. Quadratic forms. Distance and approximation. System of linear ordinary differential equations"
  ),
  createData(
    "TNMK30",
    "Electronic Publishing",
    "Oct 2016 - Dec 2016",
    "The course focuses on methods for content design in electronic publishing. Fundamental markup languages for content design. Introduction to the client-server model and script languages. Introduction to structured layout and design in electronic publishing, e.g. style sheets. Introduction to programming for electronic publishing and distributed services, e.g. dynamic information. Short introduction to databases and their application in storage and retrieval of dynamic information. Social and economic aspects of the use of digital media."
  ),
  createData(
    "TNA003",
    "Calculus I",
    "Jan 2017 - Mars 2017",
    "Functions of a real variable. Limits and continuity. Derivatives. Rules of differentiation. Properties of differentiable functions. Derivative and monotonicity. Graph sketching, tangents and normals, asymptotes. Local and global extrema. Derivatives of higher order. Convex and concave functions. How to find primitive functions. The Riemann integral. Definition and properties. Connection between the definite integral and primitive function. Methods of integration. Improper integrals. Sums and integrals."
  ),
  createData(
    "TND002",
    "Object-Oriented Programming",
    "Jan 2017 - Mars 2017",
    "The Java programming language, variables and data types, input and output, control structures. Classes and objects, instance variables and instance methods, class variables and class methods. Object-oriented programming, class diagrams and UML. Standard classes and the Java API, Inheritance, subclasses and superclasses, polymorphism and dynamic binding, abstract classes and interfaces. Streams and files, exceptions. Programs with graphical user interfaces, graphical components and layout managers, event-driven programs."
  ),
  createData(
    "TNA005",
    "Applied Mathematics in Science and Technology",
    "Jan 2017 - June 2017",
    "Introduction to Matlab and basic programming. Mathematical modelling. Numerical computations: linear algebra, transformations, systems of equations, least squares problems, matrix computations, matrix factorisations, quadrature and ordinary differential equations. Treatment of problems in computer graphics, information technology, and physics applications. Writing of technical reports in Swedish and English; opposition and oral presentations. Review of English grammar and sentence composition."
  ),
  createData(
    "TNA004",
    "Calculus II",
    "Mars 2017 - June 2017",
    "Applications of integrals - Improper integrals: definition and calculations, area, length of curves, volume of solids of revolution, area of surfaces of revolution. Generalised integrals. Estimation of sums. The formulas of Taylor and Maclaurin. The Maclaurin expansion of elementary functions. Applications, e.g. estimation of errors and finding limits. Ordinary differential equations. Equations of the first order: linear and separable equations. Integral equations. Linear equations of higher order with constant coefficients. Serie solutions. Applications will be given of mathematical models from various fields. Series."
  ),
  createData(
    "TNM046",
    "Computer Graphics",
    "Mars 2017 - June 2017",
    "2D graphics: transformations, rendering. Graphics programming in 2D. 3D graphics: objects, polygons/triangles, transformations, projections, perspective, hidden surfaces, local lighting models, texture mapping. Simple graphics programming in 3D."
  ),
  createData(
    "TNA006",
    "Calculus III",
    "Sep 2017 - Oct 2017",
    "Functions of several variables. Limits and continuity. Partial derivative, the gradient, directional derivative and differential. Tangent plane and linearization. The chain rule. Taylor's formula. Vector-valued functions, the Jacobian matrix and the Jacobian. Implicit differentiation and implicit functions. Local and global maxima and minima. Finding of maxima and minima with and without constraints. Double and triple integrals. Iterated integrals. Change of variables. Space curves."
  ),
  createData(
    "TNE043",
    "Mechanics and Wave Physics",
    "Sep 2017 - Oct 2017",
    "Introduction to experimental problem solving, dimensional analysis, analysis of experimental data. Mechanics: Kinematics, force, Newton's laws, energy and work, oscillations, collisions, rotation about a fixed axis.Wave motion and optics: general wave motion, superposition, the wave equation, mechanical waves, acoustics, electromagnetic waves, interference, diffraction, geometrical optics.Technical report writing with increased demands on academic language, oral presentation and opposition."
  ),
  createData(
    "TNM040",
    "Communication and User Interfaces",
    "Sep 2017 - Dec 2017",
    "Cognitive psychology. User-centred methods for development and guidelines for interface design."
  ),
  createData(
    "TNA007",
    "Vector Analysis",
    "Oct 2017 - Dec 2017",
    "Scalar and vector fields. The gradient, divergence and curl. Line, surface and flux integrals. The Divergence theorem and Stokes's theorem. Curvilinear coordinates. Partial differential equations."
  ),
  createData(
    "TNG033",
    "Programming in C++",
    "Oct 2017 - Dec 2017",
    "Pointers and dynamic memory allocation/deallocation. Singly-linked lists. Classes and inheritance. Constructors and destructors. Operator overloading. Friends. Virtual functions. Abstract classes. Streams and data files. Templates. Namespaces. C++ standard library: container classes, iterators, and algorithms."
  ),
  createData(
    "TNG032",
    "Applied Transform Theory",
    "Jan 2018 - Mars 2018",
    "Fourier series, Fourier transforms, Laplacetransforms, and z-transforms, together with some of their applications."
  ),
  createData(
    "TNM059",
    "Graphic Arts",
    "Jan 2018 - Mars 2018",
    "History and application areas. Basic knowledge about paper and print. Digital printing methods. Reproduction of monochromatic images in print – halftoning. Digital halftoning. Optical and physical (mechanical) dot gain. Color: representing color, color standards, color reproduction. Color halftoning. Digitalizing color images. Color gamut. Color management."
  ),
  createData(
    "TNM061",
    "3D Computer Graphics",
    "Jan 2018 - June 2018",
    "3D modeling: polygon meshes, various forms of parametric curves and surfaces. Surface properties, texture and bump mapping. Procedural textures. Environment mapping. Anti-aliasing. Global illumination models: raytracing, radiosity, hybrid methods and stochastic methods. Animation: keyframing, inverse kinematics, physical modeling, motion capture. Graphics programming: real time graphics, scene graphs, graphics hardware."
  ),
  createData(
    "TNG006",
    "Statistics",
    "Mars 2018 - June 2018",
    "Probability theory: Sample space, events and probabilities. Combinatorics. Conditional probabilities and independent events. Discrete and continuous random variables, their probability distributions, expectations and variances. Normal, exponential, binomial, Poisson distributions etc. Functions of random variables. The central limit theorem. Statistics: Point estimation. Properties of estimators. The method of maximum likelihood, the method of moments and the least squares estimation. Confidence intervals. Testing statistical hypotheses. Simple linear regression."
  ),
  createData(
    "TNG015",
    "Signals and Systems",
    "Mars 2018 - June 2018",
    "Basic properties for signals. LTI-system properties. Fourier transform and frequency analysis. Sampling and time discret signals. Laplace transform and system analysis. Z-transform analysis. Digital filters (FIR and IIR). Adaptive filters"
  ),
  createData(
    "TFYA65",
    "Physics of Sound",
    "Sep 2018 - Oct 2018",
    "Basic description of sound waves and physical phenomena related to them. Sound propagation and room acoustics. Psycho-acoustics: the human perception of sound. Properties of some different sound producers. Audio measurements and electronic circuits related to the sound. Introduction to digital sound, various digital audio formats and signal processing. The basics of sound recording and audio processing."
  ),
  createData(
    "TNG028",
    "Automatic Control",
    "Sep 2018 - Oct 2018",
    "Introduction: Dynamic systems. The feedback principle. Mathematical models I: Differential equations, transfer functions, stability, error constants. Design I: PID-control. Relationships between dynamic properties and pole location. Root locus. The Nyquist criterion. Mathematical models II: Frequency response, Bode diagram, Nyquist diagram, stability analysis in frequency domain, phase and amplitud margin. Design II: Specifications in the frequency domain, lead-lag compensation, sensitivity and robustness. Mathematical models III: State space representation. Controllability and observability. Design III: State feedback. Observers."
  ),
  createData(
    "TNM093",
    "Practical Data Visualization and Virtual Reality",
    "Sep 2018 - Dec 2018",
    "Visualization pipeline. Visualization techniques. Tracking and VR views. Interaction techniques. Perception. Applications"
  ),
  createData(
    "TNG022",
    "Modelling and Simulation",
    "Oct 2018 - Dec 2018",
    "Models and the model concept. Differential equations, difference equations. Description of statistical dynamical properties. Physically based equations for model building: energy balance, mass flow balance, Newtons laws of movement, etc. General principles for model building. Bond graphs. Model reduction. Differential algebraic equations. Identification of dynamic systems: methods to build models based om measurement data from processes. Blackbox models. Parametric estimation in linear dynamic models. System identification as model building tool. Model validation. Simulation: numeric accuracy and stability. The simulation language Simulink. To write report in English"
  ),
  createData(
    "TNM087",
    "Image Processing and Analysis",
    "Oct 2018 - Dec 2018",
    "The human visual system. Photometry. Image acquisition and camera properties. Tone value transformations. Filtering in the spatial domain. The Fourier transform and filtering in the frequency domain. Image restoration and reconstruction. Morphological operations. Segmentation. Representation of objects in images. Pattern recognition."
  ),
  createData(
    "TNM085",
    "Modelling Project",
    "Jan 2019 - Mars 2019",
    "A dynamic model is built for a chosen project work related to the TNG022 course. By simulationg the model, the chosen system is studied in a dynamic way."
  ),
  createData(
    "TNM094",
    "Media Technology - Bachelor Project",
    "Jan 2019 - June 2019",
    "Principles in Software Engineering. Development methodologies. Design Patterns. Modelling notations. Bachelor's project done together in groups."
  ),
  createData(
    "TND004",
    "Data Structures",
    "Mars 2019 - June 2019",
    "Algorithm analysis. Recursion. Lists, stacks and queues. Trees and tree traversals. Binary search trees, threaded trees and balanced trees. Hashing and hash tables. Priority queues and binary heaps. Sorting och searching. Indexed files. Graphs and graph traversals. Fundamental graph algorithms."
  ),
  createData(
    "TNM031",
    "Network Programming and Security",
    "Sep 2019 - Oct 2019",
    "Overview of computer networks and the Internet. Protocols and layers. Client-server model. Overview of network layers and routing. Firewalls, authentication and elements of cryptography: encryption and data integrity techniques. Overview of application security issues with particular emphasis on web-service and e-commerce security."
  ),
  createData(
    "TDDD23 ",
    "Design and Programming of Computer Games",
    "Sep 2019 - Oct 2019",
    "Characteristics of computer games. Variety in game experiences. Design parameters. Game analysis. High-level languages and tools for game development"
  ),
  createData(
    "TNM108",
    "Machine Learning for Social Media",
    "Sep 2019 - Dec 2019",
    ""
  ),
  createData(
    "TNM034",
    "Advanced Image Processing",
    "Oct 2019 - Dec 2019",
    "Advanced methods for image processing and image analysis in the area of the project task."
  ),
  createData(
    "TNM084",
    "Procedural Methods for Images",
    "Oct 2019 - Dec 2019",
    "The principle behind procedural images, their use, advantages and shortcomings in texturing. Textures in 2, 3 and 4 dimensions. Regular and irregular patterns. 'Perlin noise' and its relatives (lattice noises). Multifractal synthesis and simulation of turbulence. Methods for animated images. Direct Fourier synthesis. Programming in general programming languages for procedural images. RenderMan shading language and other shading languages. Functions for texture synthesis in modern graphics hardware."
  ),
  createData(
    "TNM048",
    "Information Visualisation",
    "Jan 2020 - Mars 2020",
    "The lectures provide the theoretical framework necessary to work with information visualization. These cover methods for interactive visualization of large complex data sets, common in areas such as: product development, health-care, process control, bioinformatics, etc. The lectures will also cover perception and methods for evaluation. The labs will focus on the implementation of interactive information visualization and here students work in small groups to make practical use of techniques to analyze abstract datasets. In a final project assignment, the student gets the opportunity to specialize in a specific field of information visualization."
  ),
  createData(
    "TDDD97",
    "Web Programming",
    "Jan 2020 - Mars 2020",
    "The course covers the following areas: Overview of WWW, HTML, Javascript and other client-server techniques. Programming languages Python, Flask, SQL, Websockets, JSON and other server-side technologies"
  ),
  createData(
    "TDDD27",
    "Advanced Web Programming",
    "Mars 2020 - June 2020",
    "During the course the students will develop a plan, implement and present a mid-sized multi-user application on the web. An emphasis is placed on the reuse of systems and program libraries."
  ),
  createData(
    "TNM096",
    "Artificial Intelligence - Principles and Techniques",
    "Mars 2020 - June 2020",
    "Search as a problem-solving method. Knowledge representation and reasoning. Reasoning with incomplete information and probabilistic reasoning. Planning. Machine learning."
  ),
  createData(
    "TNM079",
    "Modelling and Animation",
    "Mars 2020 - June 2020",
    "Representations of surfaces in 3D. Triangular meshes in modeling. Mesh decimation. Implicit modeling. The level-set method in computer graphics and modeling. Splines and subdivision surfaces. Physics based simulation and animation of fluids."
  ),
  createData(
    "TSBK03",
    "Advanced Game Programming",
    "Sep 2020 - Dec 2020",
    "Computer Graphics: Stencil buffer. Shadows. HDR. Bump mapping. Stereoscopic display. Physics: Kinetics and kinematics. Rigid bodies. Deformable bodies. Animation. Skinning. AI: Search, behavior, state machines. Networks: Principles for network games. Netlag. Other: Quaternions for rotation. GPU computing."
  ),
  createData(
    "TNM095",
    "Artificial Intelligence for Interactive Media",
    "Sep 2020 - Oct 2020",
    "Course content includes: Declarative techniques in scene modeling. Computational creativity. Intelligent methods of exploring virtual worlds. Artificial Life for Virtual Worlds. Behavioral animation. Computer graphics and learning. Intelligent visualization. Interactive storytelling"
  ),
  createData(
    "TNCG13",
    "SFX - Tricks of the Trade",
    "Oct 2020 - Dec 2020",
    "The industry's trick. Modern movies and their techniques. Different stages of SFX production, raging from research and development to the compilation of end sequences. Work with state-of-the-art tools for SFX production."
  ),
  createData(
    "TDDD89",
    "Scientific Method",
    "Oct 2020 - Dec 2020",
    "Scientific methods: their purpose, quantiative methods, qualitative methods. Engineering and science. Scientific writing. Literature search and summary. Critical analysis of scientific work: reliability and validity. Reference management: specificity and completeness.. Ethics in research. Societal aspects of research and technical development."
  ),
  createData(
    "TQXX33",
    "Degree project - Master’s Thesis",
    "Jan/Feb 2021 - June/July 2021",
    "Determined individually for each student in consultation with the examiner and the supervisor. The project must be carried out within the main field of study."
  ),
];
const getFirstYearContent = (course) => {
  let content = [];
  for (let i = 0; i < 10; i++) {
    const item = course[i];
    content.push(<Row key={item.name} row={item} />);
  }
  return content;
};
const getSecondYearContent = (course) => {
  let content = [];
  for (let i = 10; i < 20; i++) {
    const item = course[i];
    content.push(<Row key={item.name} row={item} />);
  }
  return content;
};
const getThirdYearContent = (course) => {
  let content = [];
  for (let i = 20; i < 28; i++) {
    const item = course[i];
    content.push(<Row key={item.name} row={item} />);
  }
  return content;
};
const getFourthYearContent = (course) => {
  let content = [];
  for (let i = 28; i < 38; i++) {
    const item = course[i];
    content.push(<Row key={item.name} row={item} />);
  }
  return content;
};
const getFifthYearContent = (course) => {
  let content = [];
  for (let i = 38; i < 43; i++) {
    const item = course[i];
    content.push(<Row key={item.name} row={item} />);
  }
  return content;
};
const getHeader = (context) => {
  return (
    <TableRow>
      <TableCell />
      <TableCell
        style={{
          fontSize: "15pt",
          color: context.theme.textPrimary,
        }}
      >
        Course Code
      </TableCell>
      <TableCell
        style={{
          fontSize: "15pt",
          color: context.theme.textPrimary,
        }}
      >
        Course Name
      </TableCell>
      <TableCell
        style={{
          fontSize: "14pt",
          color: context.theme.textPrimary,
        }}
        align="right"
      >
        Taken
      </TableCell>
    </TableRow>
  );
};

const CoursesPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
  } = context;
  const [firstYearOpen, setFirstYearOpen] = React.useState(false);
  const [secondYearOpen, setSecondYearOpen] = React.useState(false);
  const [thirdYearOpen, setThirdYearOpen] = React.useState(false);
  const [fourthYearOpen, setFourthYearOpen] = React.useState(false);
  const [fifthYearOpen, setFifthYearOpen] = React.useState(false);

  return (
    <div
      className="courses-page"
      style={{ backgroundColor: bgPrimary, color: textPrimary }}
    >
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Courses</h1>
        <TableContainer
          component={Paper}
          style={{
            backgroundColor: "#6b6b6b",
          }}
        >
          <Table aria-label="collapsible table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setFirstYearOpen(!firstYearOpen)}
                    style={{
                      color: colorPrimary,
                    }}
                  >
                    {firstYearOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell />
                <TableCell
                  style={{
                    color: "#ffffff",
                  }}
                  align="left"
                >
                  First year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    color: "#ffffff",
                  }}
                  colSpan={6}
                >
                  <Collapse in={firstYearOpen} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="purchases">
                        <TableBody
                          style={{
                            fontSize: "10pt",
                          }}
                          align="center"
                        >
                          {getHeader(context)}
                          {getFirstYearContent(rows)}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setSecondYearOpen(!secondYearOpen)}
                    style={{
                      color: colorPrimary,
                    }}
                  >
                    {secondYearOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell />
                <TableCell
                  style={{
                    color: "#ffffff",
                  }}
                  align="left"
                >
                  Second year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    color: "#ffffff",
                  }}
                  colSpan={6}
                >
                  <Collapse in={secondYearOpen} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="purchases">
                        <TableBody
                          style={{
                            fontSize: "10pt",
                          }}
                          align="center"
                        >
                          {getHeader(context)}
                          {getSecondYearContent(rows)}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setThirdYearOpen(!thirdYearOpen)}
                    style={{
                      color: colorPrimary,
                    }}
                  >
                    {thirdYearOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell />
                <TableCell
                  style={{
                    color: "#ffffff",
                  }}
                  align="left"
                >
                  Third year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    color: "#ffffff",
                  }}
                  colSpan={6}
                >
                  <Collapse in={thirdYearOpen} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="purchases">
                        <TableBody
                          style={{
                            fontSize: "10pt",
                          }}
                          align="center"
                        >
                          {getHeader(context)}
                          {getThirdYearContent(rows)}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setFourthYearOpen(!fourthYearOpen)}
                    style={{
                      color: colorPrimary,
                    }}
                  >
                    {fourthYearOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell />
                <TableCell
                  style={{
                    color: "#ffffff",
                  }}
                  align="left"
                >
                  Fourth year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    color: "#ffffff",
                  }}
                  colSpan={6}
                >
                  <Collapse in={fourthYearOpen} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="purchases">
                        <TableBody
                          style={{
                            fontSize: "10pt",
                          }}
                          align="center"
                        >
                          {getHeader(context)}
                          {getFourthYearContent(rows)}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setFifthYearOpen(!fifthYearOpen)}
                    style={{
                      color: colorPrimary,
                    }}
                  >
                    {fifthYearOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell />
                <TableCell
                  style={{
                    color: "#ffffff",
                  }}
                  align="left"
                >
                  Fifth year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                    color: "#ffffff",
                  }}
                  colSpan={6}
                >
                  <Collapse in={fifthYearOpen} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="purchases">
                        <TableBody
                          style={{
                            fontSize: "10pt",
                          }}
                          align="center"
                        >
                          {getHeader(context)}
                          {getFifthYearContent(rows)}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <ScrollToPrevious pageSelector=".commitment-page" />
    </div>
  );
};

CoursesPage.contextTypes = {
  theme: PropTypes.any,
};

export default CoursesPage;
