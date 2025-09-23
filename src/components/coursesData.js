// src/components/coursesData.js

export const courses = [
  // Frontend Courses
  {
  id: 1,
  title: "React JS",
  description: "Learn React JS from scratch",
  syllabus: [
    "Introduction to React\n• History of React\n• Key Benefits of React\n• React development environment\n• Creating your first React Application",
    "JSX\n• Introduction to JSX\n• Coding in JSX\n• Expressions in JSX\n• Working with XML\n• Conditional Constructs",
    "Components\n• Introduction to components\n• Why Components?\n• Writing JSX code in components\n• Adding CSS\n• Populating Data Dynamically\n• Passing data through props\n• Multiple Components",
    "Rendering Lists and Conditional Contents\n• Rendering lists of data\n• Using stateful list\n• Keys in data\n• Conditional Contents\n• Adding dynamic styles",
    "HTTP\n• Introduction to HTTP\n• Methods in HTTP\n• Introduction to REST interfaces\n• Characteristics of REST\n• Introduction to JSON\n• JSON data representation\n• GET request\n• Using async and await\n• Handling HTTP errors\n• POST request",
    "Custom React Hooks\n• What are custom hooks?\n• Creating and using custom hooks\n• Custom HTTP hooks",
    "Forms\n• Introduction to Forms\n• Working with user input and submission\n• Adding validation\n• Working with custom hooks",
    "Routing and Navigation\n• Introduction to Single Page Applications\n• What is Routing?\n• Why Routing?\n• Installing React Router\n• Defining and using routes\n• Working with links\n• Dynamic routes with Params\n• Nested routes\n• Redirecting the user"
  ],
},


  {
  id: 2,
  title: "Angular & TypeScript",
  description: "Modern web apps with Angular & TypeScript",
  syllabus: [
    "Angular Fundamentals\n• Angular Fundamentals\n• Data Binding\n• Routing and Navigation\n• HTTP client\n• Component Interaction\n• Lifecycle Hooks\n• Angular Directives\n• Pipes\n• Services",
    "TypeScript Basics\n• Type Annotations\n• Interfaces\n• Classes\n• Generics\n• Enums\n• Type Inference\n• Union and Intersection Types\n• Decorators\n• Modules"
  ],
},

  {
  id: 3,
  title: "React Native",
  description: "Build mobile apps with React Native",
  syllabus: [
    "Introduction to React Native\n• What is React Native?\n• Differences between React Native and React.js\n• Advantages and limitations of React Native\n• Setting up the development environment",
    "Core Components and APIs\n• Basic components: View, Text, Image, Button, ScrollView, FlatList, SectionList\n• Layout and styling: Flexbox, StyleSheet\n• Handling user input: TextInput, TouchableOpacity, TouchableHighlight, Pressable",
    "State Management\n• useState and useReducer for local state\n• Context API for global state\n• Third-party libraries: Redux, Zustand, MobX, Recoil",
    "Navigation\n• React Navigation: Stack, Tabs, Drawer navigators\n• Deep linking\n• Passing parameters between screens\n• Customizing navigation headers and transitions",
    "Data Handling and Networking\n• Fetching data with fetch or Axios\n• REST API integration\n• Handling authentication tokens (e.g., Firebase, OAuth)\n• WebSocket for real-time updates",
    "Styling\n• Inline styles vs. StyleSheet\n• Responsive design: Dimensions, PixelRatio",
    "Forms and Validation\n• Handling forms with TextInput, Picker, Checkbox\n• Form libraries: Formik, React Hook Form\n• Validation libraries: Yup, Zod",
    "Device Features and Native Modules\n• Camera and gallery access (react-native-image-picker, react-native-camera)\n• Location services (react-native-geolocation-service)\n• Sensors: Accelerometer, Gyroscope\n• Push notifications (react-native-push-notification, Firebase FCM)\n• Permissions (react-native-permissions)",
    "Performance Optimization\n• Avoiding unnecessary renders with memo, useMemo, useCallback\n• Lazy loading components\n• Using FlatList effectively\n• Profiling and debugging performance bottlenecks",
    "Third-Party Libraries\n• UI libraries: React Native Paper, NativeBase\n• Animation libraries: react-native-reanimated, react-native-gesture-handler\n• Navigation and routing: React Navigation, React Native Navigation\n• Image handling: FastImage",
    "Integration with Backend\n• Authentication: Firebase, JWT\n• Real-time communication: WebSocket, SignalR\n• Backend as a Service (BaaS): Firebase, AWS Amplify"
  ],
},


  // Backend Courses
 {
  id: 4,
  title: "DevOps",
  description: "Learn DevOps tools, CI/CD, containers, cloud, and automation",
  syllabus: [
    "Week 1: Introduction & Linux Basics\n• Day 1: Introduction to DevOps, SDLC, and DevOps lifecycle\n• Day 2: Linux basics: file system, commands, users & permissions\n• Day 3: Shell scripting basics\n• Day 4: Linux networking & process management\n• Day 5: Package management (apt, yum)\n• Day 6: File handling & text processing (grep, awk, sed)\n• Day 7: Revision & mini project (Shell automation scripts)",

    "Week 2: Version Control & Build Tools\n• Day 8: Introduction to Git & GitHub\n• Day 9: Git branching, merging, pull requests\n• Day 10: Git workflows (feature branch, GitFlow)\n• Day 11: Introduction to build tools: Maven & Gradle\n• Day 12: Build automation, dependencies, and plugins\n• Day 13: Introduction to Jenkins & CI concepts\n• Day 14: Mini project (Git + Jenkins pipeline for a simple app)",

    "Week 3: Configuration Management & Containers\n• Day 15: Introduction to configuration management (Ansible basics)\n• Day 16: Playbooks, roles, and inventories in Ansible\n• Day 17: Introduction to Docker: images, containers, volumes\n• Day 18: Docker networking & Docker Compose\n• Day 19: Container best practices & Dockerfile optimization\n• Day 20: Hands-on Docker project\n• Day 21: Mini project (Containerize a simple web application)",

    "Week 4: Continuous Integration & Deployment\n• Day 22: Advanced Jenkins pipelines (Declarative & Scripted)\n• Day 23: CI/CD concepts & pipeline design\n• Day 24: Integration with GitHub & automated testing\n• Day 25: Deployment automation with Ansible\n• Day 26: Introduction to Kubernetes (pods, deployments, services)\n• Day 27: Kubernetes hands-on: scaling & self-healing\n• Day 28: Mini project (CI/CD pipeline with automated deployment)",

    "Week 5: Cloud & Monitoring\n• Day 29: Introduction to cloud computing (AWS/GCP basics)\n• Day 30: EC2, S3, RDS, IAM basics\n• Day 31: Infrastructure as Code (Terraform basics)\n• Day 32: Introduction to monitoring & logging (Prometheus, Grafana)\n• Day 33: Alerting & dashboards\n• Day 34: ELK Stack (Elasticsearch, Logstash, Kibana) basics\n• Day 35: Mini project (Deploy app to cloud + monitoring setup)",

    "Week 6: Advanced DevOps & Projects\n• Day 36: Advanced Kubernetes concepts (Ingress, ConfigMaps, Secrets)\n• Day 37: Helm charts & package management for Kubernetes\n• Day 38: Security best practices in DevOps\n• Day 39: Scaling & high availability design\n• Day 40: DevOps pipelines for microservices\n• Day 41: Troubleshooting & debugging pipelines\n• Day 42: Final project presentation (Full CI/CD pipeline with monitoring and cloud deployment)"
  ],
},

{
  id: 5,
  title: "Python Full-Stack Development",
  description: "Backend & Full-Stack development with Python",
  syllabus: [
    "Week 1: Python Basics\n• Day 1: Introduction to Python, setup, IDEs, variables, data types\n• Day 2: Operators, expressions, input/output\n• Day 3: Conditional statements (if-else)\n• Day 4: Loops (for, while), break & continue\n• Day 5: Functions, parameters, return values\n• Day 6: Modules & packages\n• Day 7: Revision & mini project (Simple calculator)",

    "Week 2: Data Structures & OOP\n• Day 8: Lists, tuples, sets\n• Day 9: Dictionaries, looping through collections\n• Day 10: Strings & string methods\n• Day 11: File handling (read/write)\n• Day 12: Exception handling\n• Day 13: Classes and objects, constructors\n• Day 14: Inheritance, polymorphism, encapsulation & mini project",

    "Week 3: Advanced Python\n• Day 15: Decorators & lambda functions\n• Day 16: Generators & iterators\n• Day 17: Context managers & with statement\n• Day 18: Regular expressions\n• Day 19: Working with JSON and CSV\n• Day 20: Logging & debugging\n• Day 21: Mini project (Data parser / File manager)",

    "Week 4: Backend Development (Flask/Django)\n• Day 22: Introduction to web development & Flask/Django setup\n• Day 23: Routing & templates\n• Day 24: Forms, validation & static files\n• Day 25: Database setup: SQL (SQLite/PostgreSQL)\n• Day 26: CRUD operations & ORM\n• Day 27: REST API basics\n• Day 28: Mini project (Simple Blog API)",

    "Week 5: Frontend Basics & Integration\n• Day 29: HTML5 & CSS3 basics\n• Day 30: JavaScript basics & DOM manipulation\n• Day 31: AJAX & Fetch API\n• Day 32: Connecting frontend with backend (API calls)\n• Day 33: React.js basics (components, props, state)\n• Day 34: Forms & events in React\n• Day 35: Mini project (To-do App frontend + backend integration)",

    "Week 6: Full-Stack Projects & Deployment\n• Day 36: Advanced CRUD project structure\n• Day 37: Authentication & session management\n• Day 38: Advanced project: E-commerce or Chat app setup\n• Day 39: Deployment to Heroku/AWS\n• Day 40: Docker basics & environment setup\n• Day 41: Testing & debugging\n• Day 42: Final project presentation & course wrap-up"
  ],
},


  {
  id: 6,
  title: "Java Full-Stack Development",
  description: "Backend & Full-Stack development with Java",
  syllabus: [
    "Week 1: Java Basics\n• Day 1: Introduction to Java, JDK/JRE setup, IDEs\n• Day 2: Data types, variables, operators\n• Day 3: Conditional statements (if-else, switch)\n• Day 4: Loops (for, while, do-while)\n• Day 5: Methods & parameters\n• Day 6: Arrays & String handling\n• Day 7: Revision & mini project (Simple Calculator)",

    "Week 2: Object-Oriented Programming (OOP)\n• Day 8: Classes & objects, constructors\n• Day 9: Inheritance & method overriding\n• Day 10: Polymorphism & encapsulation\n• Day 11: Abstraction & interfaces\n• Day 12: Packages & access modifiers\n• Day 13: Exception handling\n• Day 14: Mini project (Library Management System)",

    "Week 3: Advanced Java\n• Day 15: Collections framework (List, Set, Map)\n• Day 16: Generics & iterators\n• Day 17: File handling (Text, CSV, JSON)\n• Day 18: Multithreading basics\n• Day 19: Streams & Lambda expressions\n• Day 20: Java 8 features\n• Day 21: Mini project (File parser / Data handler)",

    "Week 4: Backend Development with Spring Boot\n• Day 22: Introduction to Spring Boot, setup, project structure\n• Day 23: RESTful APIs with Spring Boot\n• Day 24: Database integration: MySQL/PostgreSQL, JPA & Hibernate\n• Day 25: CRUD operations using Spring Data JPA\n• Day 26: Authentication & Authorization (Spring Security basics)\n• Day 27: Exception handling & logging\n• Day 28: Mini project (Employee Management API)",

    "Week 5: Frontend Basics & Integration\n• Day 29: HTML5 & CSS3\n• Day 30: JavaScript & DOM manipulation\n• Day 31: AJAX & Fetch API\n• Day 32: React.js basics (components, props, state)\n• Day 33: Connecting React with Spring Boot APIs\n• Day 34: Forms & event handling in React\n• Day 35: Mini project (To-do App frontend + backend integration)",

    "Week 6: Full-Stack Projects & Deployment\n• Day 36: Advanced project setup (E-commerce or Inventory App)\n• Day 37: Session management & JWT authentication\n• Day 38: File uploads & download features\n• Day 39: Deployment to Heroku / AWS\n• Day 40: Docker basics & containerization\n• Day 41: Testing & debugging (JUnit, Postman)\n• Day 42: Final project presentation & course wrap-up"
  ],
},
{
  id: 7,
  title: "Software Testing",
  description: "Learn manual and automation testing, CI/CD integration, and best practices",
  syllabus: [
    "Week 1: Introduction to Software Testing\n• Day 1: Introduction to software testing, SDLC, STLC\n• Day 2: Types of testing: Manual vs Automation, Functional vs Non-functional\n• Day 3: Test planning, test strategy, and test case writing\n• Day 4: Test design techniques (Boundary value, Equivalence partitioning)\n• Day 5: Bug lifecycle & defect reporting\n• Day 6: Testing tools overview\n• Day 7: Mini project: Write test cases for a sample application",

    "Week 2: Manual Testing\n• Day 8: Requirement analysis & test scenario creation\n• Day 9: Test case execution & logging defects\n• Day 10: Smoke, Sanity, Regression, and Integration testing\n• Day 11: User Acceptance Testing (UAT) & system testing\n• Day 12: Exploratory testing techniques\n• Day 13: Test management tools (JIRA, TestRail)\n• Day 14: Mini project: Execute test cases and log defects in JIRA",

    "Week 3: Basics of Automation Testing\n• Day 15: Introduction to automation testing, benefits, and tools\n• Day 16: Selenium WebDriver overview & setup\n• Day 17: Locators, web element interactions\n• Day 18: Handling dropdowns, alerts, frames, and windows\n• Day 19: TestNG basics: annotations, suites, and reports\n• Day 20: Maven/Gradle integration & project structure\n• Day 21: Mini project: Automate login and form submission",

    "Week 4: Advanced Automation Testing\n• Day 22: Page Object Model (POM) design pattern\n• Day 23: Data-driven testing with Excel/CSV/JSON\n• Day 24: Handling waits, synchronization, and exceptions\n• Day 25: Cross-browser testing & Selenium Grid\n• Day 26: Introduction to API testing (Postman basics)\n• Day 27: REST API testing using RestAssured\n• Day 28: Mini project: Automate a web application with POM and API tests",

    "Week 5: CI/CD & DevOps for Testing\n• Day 29: Introduction to CI/CD pipelines\n• Day 30: Integrating automation tests in Jenkins pipeline\n• Day 31: Running automated tests in CI/CD pipelines\n• Day 32: Reporting & logs in CI/CD\n• Day 33: Introduction to Docker for test environments\n• Day 34: Test environment setup & containerization basics\n• Day 35: Mini project: CI/CD pipeline with automated testing",

    "Week 6: Advanced Testing & Projects\n• Day 36: Performance testing basics (JMeter or LoadRunner)\n• Day 37: Security testing basics\n• Day 38: Mobile testing basics (Appium)\n• Day 39: Automation framework best practices\n• Day 40: Test reporting & metrics\n• Day 41: Debugging & troubleshooting automation scripts\n• Day 42: Final project presentation: End-to-end testing of a sample application"
  ],
},
{
  id: 8,
  title: "Spring Boot Full-Stack Development",
  description: "Learn Spring Boot backend development with frontend integration (React/Angular)",
  syllabus: [
    "Week 1: Introduction & Core Java Recap\n• Day 1: Introduction to Spring Boot, setup, and project structure\n• Day 2: Core Java recap (OOP, collections, exception handling)\n• Day 3: Introduction to Maven & Gradle\n• Day 4: Spring Boot starter projects and dependencies\n• Day 5: Application.properties & YAML configuration\n• Day 6: Spring Boot annotations overview (@RestController, @Service, @Repository)\n• Day 7: Mini project: Hello World REST API",

    "Week 2: Dependency Injection & Spring Core\n• Day 8: Inversion of Control (IoC) & Dependency Injection (DI)\n• Day 9: Spring Beans & Bean lifecycle\n• Day 10: Component scanning and autowiring\n• Day 11: Profiles & environment-based configuration\n• Day 12: Exception handling in Spring Boot\n• Day 13: Logging & debugging in Spring Boot\n• Day 14: Mini project: Service layer with DI",

    "Week 3: REST API Development\n• Day 15: Introduction to REST architecture\n• Day 16: CRUD operations with Spring Boot\n• Day 17: RequestMapping, PathVariable, RequestParam\n• Day 18: RequestBody & ResponseEntity\n• Day 19: HATEOAS & versioning REST APIs\n• Day 20: Exception handling & validation (@Valid, @ExceptionHandler)\n• Day 21: Mini project: REST API for a simple library system",

    "Week 4: Database Integration & JPA\n• Day 22: Introduction to relational databases (MySQL/PostgreSQL)\n• Day 23: Spring Data JPA setup & repository interfaces\n• Day 24: Entities, primary keys, and relationships (OneToOne, OneToMany, ManyToMany)\n• Day 25: JPQL & custom queries\n• Day 26: Transactions & pagination\n• Day 27: Data validation & constraints\n• Day 28: Mini project: CRUD operations with database integration",

    "Week 5: Security & Advanced Features\n• Day 29: Introduction to Spring Security\n• Day 30: Authentication & Authorization (JWT basics)\n• Day 31: Role-based access control\n• Day 32: Password encoding & user registration/login\n• Day 33: CORS, filters, and interceptors\n• Day 34: Scheduling tasks & asynchronous processing\n• Day 35: Mini project: Secure REST API with JWT",

    "Week 6: Frontend Integration & Projects\n• Day 36: Introduction to frontend integration (React/Angular basics)\n• Day 37: Connecting frontend with Spring Boot APIs\n• Day 38: Handling forms & validations in frontend\n• Day 39: File uploads & download APIs\n• Day 40: Exception handling & global error handling\n• Day 41: Deployment to Heroku/AWS\n• Day 42: Final project: Full-stack Spring Boot + React application"
  ],
},
{
  id: 9,
  title: "Aptitude & Reasoning",
  description: "Prepare for interviews and competitive exams with aptitude and reasoning skills",
  syllabus: [
    "Week 1: Basics of Quantitative Aptitude\n• Day 1: Introduction to Aptitude & Reasoning, importance in interviews/tests\n• Day 2: Number systems, divisibility, LCM, HCF\n• Day 3: Simplification, percentages, profit & loss\n• Day 4: Ratio & proportion, partnership, averages\n• Day 5: Simple & compound interest\n• Day 6: Time, speed, distance\n• Day 7: Mini practice session: Mixed problems",

    "Week 2: Advanced Quantitative Aptitude\n• Day 8: Time & work problems\n• Day 9: Pipes & cisterns\n• Day 10: Mixtures & alligations\n• Day 11: Mensuration (2D & 3D)\n• Day 12: Algebra basics & quadratic equations\n• Day 13: Probability basics\n• Day 14: Mini test: Week 2 problems",

    "Week 3: Logical Reasoning Basics\n• Day 15: Introduction to reasoning & types\n• Day 16: Series (number, alphabet, mixed)\n• Day 17: Analogies & classification\n• Day 18: Coding-decoding\n• Day 19: Directions & distance\n• Day 20: Blood relations & family tree problems\n• Day 21: Mini practice session: Logical puzzles",

    "Week 4: Advanced Logical Reasoning\n• Day 22: Seating arrangements (linear & circular)\n• Day 23: Syllogisms\n• Day 24: Statement & assumptions, conclusions\n• Day 25: Clocks, calendars, and cubes\n• Day 26: Data sufficiency problems\n• Day 27: Puzzles (miscellaneous)\n• Day 28: Mini test: Week 4 problems",

    "Week 5: Data Interpretation & Mixed Problems\n• Day 29: Tables & bar graphs\n• Day 30: Pie charts & line charts\n• Day 31: Caselets & data analysis problems\n• Day 32: Speed, distance & time revision problems\n• Day 33: Profit, loss & percentage problems\n• Day 34: Mixed reasoning puzzles\n• Day 35: Mini practice session: Combined aptitude & reasoning",

    "Week 6: Final Practice & Mock Tests\n• Day 36: Advanced quantitative aptitude problems\n• Day 37: Advanced logical reasoning problems\n• Day 38: Previous year aptitude questions (company-wise)\n• Day 39: Mock Test 1\n• Day 40: Mock Test 2\n• Day 41: Mock Test 3\n• Day 42: Review & doubt clearing session"
  ],
},
{
  id: 10,
  title: "HTML & CSS",
  description: "Learn web development fundamentals with HTML, CSS, responsive design, and best practices",
  syllabus: [
    "Week 1: HTML Basics\n• Day 1: Introduction to Web Development, HTML structure, tags, attributes\n• Day 2: Headings, paragraphs, lists (ordered, unordered), line breaks\n• Day 3: Links, images, and multimedia elements\n• Day 4: Tables and forms basics\n• Day 5: HTML5 semantic tags (header, footer, article, section)\n• Day 6: Forms: input types, buttons, textarea, checkboxes, radio buttons\n• Day 7: Mini project: Simple personal webpage",

    "Week 2: CSS Basics\n• Day 8: Introduction to CSS, inline, internal, and external styles\n• Day 9: Selectors, combinators, pseudo-classes, pseudo-elements\n• Day 10: Colors, backgrounds, borders, margin, padding\n• Day 11: Typography: fonts, text alignment, text decoration, line-height\n• Day 12: Box model and positioning (static, relative, absolute, fixed)\n• Day 13: Display and visibility (block, inline, inline-block, none)\n• Day 14: Mini project: Styled personal webpage",

    "Week 3: Advanced CSS\n• Day 15: Flexbox: containers, items, alignment, wrapping\n• Day 16: CSS Grid: rows, columns, grid-template, grid-gap\n• Day 17: Transitions and animations\n• Day 18: CSS transformations (rotate, scale, translate)\n• Day 19: Pseudo-classes and advanced selectors\n• Day 20: Shadow effects (box-shadow, text-shadow)\n• Day 21: Mini project: Responsive card layout",

    "Week 4: Responsive Web Design\n• Day 22: Introduction to responsive design, mobile-first approach\n• Day 23: Media queries basics\n• Day 24: Responsive typography and images\n• Day 25: CSS units (px, %, em, rem, vh, vw)\n• Day 26: Building a responsive navigation bar\n• Day 27: CSS frameworks overview (Bootstrap basics)\n• Day 28: Mini project: Responsive portfolio webpage",

    "Week 5: CSS Advanced Techniques\n• Day 29: Gradients, patterns, and background effects\n• Day 30: CSS variables and custom properties\n• Day 31: Advanced form styling\n• Day 32: CSS pseudo-elements (::before, ::after)\n• Day 33: CSS transitions and hover effects\n• Day 34: Building a responsive grid layout\n• Day 35: Mini project: Landing page with animations",

    "Week 6: Final Projects & Best Practices\n• Day 36: Website structure planning and wireframing\n• Day 37: Building multi-section web pages\n• Day 38: Optimization and performance best practices\n• Day 39: Accessibility basics (ARIA, semantic HTML)\n• Day 40: Cross-browser testing and debugging\n• Day 41: Final project development\n• Day 42: Final project presentation: Complete responsive website"
  ],
},


];
