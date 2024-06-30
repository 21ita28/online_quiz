const QUESTIONS = [
    {
        "id": 1,
        "topic": "HTML",
        "question": "What does HTML stand for?",
        "answers": [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Main Language"
        ],
        "correctAnswer": 0
    },
    {
        "id": 2,
        "topic": "HTML",
        "question": "Which HTML tag is used to define an unordered list?",
        "answers": [
            "<ol>",
            "<ul>",
            "<li>",
            "<ul>"
        ],
        "correctAnswer": 1
    },    
    {
        "id": 3,
        "topic": "HTML",
        "question": "What is the correct HTML for creating a hyperlink?",
        "answers": [
            "<link url='http://example.com'>Example</link>",
            "<href='http://example.com'>Example</href>",
            "<a href='http://example.com'>Example</a>",
            "<a url='http://example.com'>Example</a>"
        ],
        "correctAnswer": 2
    },    
    {
        "id": 4,
        "topic": "HTML",
        "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        "answers": [
            "title",
            "alt",
            "src",
            "href"
        ],
        "correctAnswer": 1
    },    
    {
        "id": 5,
        "topic": "HTML",
        "question": "Which HTML element is used to specify a footer for a document or section?",
        "answers": [
            "<section>",
            "<bottom>",
            "<end>",
            "<footer>"
        ],
        "correctAnswer": 3
    },    
    {
        "id": 6,
        "topic": "HTML",
        "question": "What is the correct HTML for inserting a line break?",
        "answers": [
            "<lb>",
            "<br>",
            "<break>",
            "<line>"
        ],
        "correctAnswer": 1
    },    
    {
        "id": 7,
        "topic": "HTML",
        "question": "Which HTML attribute specifies the URL of the page the link goes to?",
        "answers": [
            "href",
            "src",
            "link",
            "url"
        ],
        "correctAnswer": 0
    },    
    {
        "id": 8,
        "topic": "HTML",
        "question": "In HTML, which tag is used to define a table row?",
        "answers": [
            "<td>",
            "<table>",
            "<tr>",
            "<th>"
        ],
        "correctAnswer": 1
    },    
    {
        "id": 9,
        "topic": "HTML",
        "question": "Which HTML element is used to define important text?",
        "answers": [
            "<bold>",
            "<important>",
            "<em>",
            "<strong>"
        ],
        "correctAnswer": 3
    },    
    {
        "id": 10,
        "topic": "HTML",
        "question": "What does the <canvas> element in HTML5 provide?",
        "answers": [
            "A rectangular area for drawing graphics",
            "A container for SVG graphics",
            "A scriptable region for media files",
            "An animated image"
        ],
        "correctAnswer": 0
    },    
        {
            "id": 11,
            "topic": "CSS",
            "question": "What does CSS stand for?",
            "answers": [
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets",
                "Computer Style Sheets"
            ],
            "correctAnswer": 0
        },
        {
            "id": 12,
            "topic": "CSS",
            "question": "Which CSS property is used to change the text color of an element?",
            "answers": [
                "text-color",
                "font-color",
                "style-color",
                "color"
            ],
            "correctAnswer": 3
        },
        {
            "id": 13,
            "topic": "CSS",
            "question": "How do you apply a background color to an element in CSS?",
            "answers": [
                "color-background",
                "background-color",
                "element-background",
                "bg-color"
            ],
            "correctAnswer": 1
        },
        {
            "id": 14,
            "topic": "CSS",
            "question": "Which CSS property is used to control the spacing between elements?",
            "answers": [
                "padding",
                "spacing",
                "margin",
                "border-spacing"
            ],
            "correctAnswer": 2
        },
        {
            "id": 15,
            "topic": "CSS",
            "question": "What is the default value of the position property in CSS?",
            "answers": [
                "relative",
                "absolute",
                "static",
                "fixed"
            ],
            "correctAnswer": 2
        },
        {
            "id": 16,
            "topic": "CSS",
            "question": "Which CSS property is used to create space around elements, outside of any defined borders?",
            "answers": [
                "margin",
                "padding",
                "spacing",
                "border-spacing"
            ],
            "correctAnswer": 0
        },
        {
            "id": 17,
            "topic": "CSS",
            "question": "What is the correct CSS syntax for making all the <p> elements bold?",
            "answers": [
                "p { text-style: bold; }",
                "p { bold: true; }",
                "p { style: bold; }",
                "p { font-weight: bold; }"
            ],
            "correctAnswer": 3
        },
        {
            "id": 18,
            "topic": "CSS",
            "question": "Which CSS property is used to control the order of flexible items in a flex container?",
            "answers": [
                "order",
                "flex-order",
                "item-order",
                "flex-item-order"
            ],
            "correctAnswer": 0
        },
        {
            "id": 19,
            "topic": "CSS",
            "question": "How do you round the corners of an element in CSS?",
            "answers": [
                "corner-radius",
                "border-radius",
                "element-radius",
                "round-border"
            ],
            "correctAnswer": 1
        },
        {
            "id": 20,
            "topic": "CSS",
            "question": "Which CSS property is used to control the flow of text between block elements?",
            "answers": [
                "flow",
                "white-space",
                "text-flow",
                "text-wrap"
                
            ],
            "correctAnswer": 1
        },
            {
                "id": 21,
                "topic": "Javascript",
                "question": "What is JavaScript?",
                "answers": [
                    "A markup language",
                    "An operating system",
                    "A programming language",
                    "A database language"
                ],
                "correctAnswer": 2
            },
            {
                "id": 22,
                "topic": "Javascript",
                "question": "Which keyword is used to declare a variable in JavaScript?",
                "answers": [
                    "const",
                    "var",
                    "int",
                    "let"
                ],
                "correctAnswer": 1
            },
            {
                "id": 23,
                "topic": "Javascript",
                "question": "How do you write an 'if' statement in JavaScript?",
                "answers": [
                    "if {condition} then { // code block }",
                    "if (condition) then { // code block }",
                    "if condition then { // code block }",
                    "if (condition) { // code block }"
                ],
                "correctAnswer": 3
            },
            {
                "id": 24,
                "topic": "Javascript",
                "question": "Which method is used to print something in the console?",
                "answers": [
                    "write()",
                    "echo()",
                    "console.log()",
                    "print()"
                ],
                "correctAnswer": 2
            },
            {
                "id": 25,
                "topic": "Javascript",
                "question": "What type of language is JavaScript?",
                "answers": [
                    "Procedural programming language",
                    "Markup language",
                    "Functional programming language",
                    "Object-oriented programming (OOP) language"
                ],
                "correctAnswer": 3
            },
            {
                "id": 26,
                "topic": "Javascript",
                "question": "Which operator is used to compare two values for equality in JavaScript?",
                "answers": [
                    "===",
                    "!=",
                    "!==",
                    "=="
                ],
                "correctAnswer": 3
            },
            {
                "id": 27,
                "topic": "Javascript",
                "question": "How do you declare a function in JavaScript?",
                "answers": [
                    "myFunction = function() {}",
                    "function myFunction() {}",
                    "declare function myFunction() {}",
                    "def myFunction() {}"
                ],
                "correctAnswer": 1
            },
            {
                "id": 28,
                "topic": "Javascript",
                "question": "Which method is used to add an element to the end of an array in JavaScript?",
                "answers": [
                    "addToEnd()",
                    "push()",
                    "append()",
                    "insert()"
                ],
                "correctAnswer": 1
            },
            {
                "id": 29,
                "topic": "Javascript",
                "question": "What does DOM stand for in JavaScript?",
                "answers": [
                    "Data Object Model",
                    "Digital Object Model",
                    "Document Oriented Model",
                    "Document Object Model"
                ],
                "correctAnswer": 3
            },
            {
                "id": 30,
                "topic": "Javascript",
                "question": "How do you select an element by its ID in JavaScript?",
                "answers": [
                    ".getElementById('elementId')",
                    "document.getElementById('elementId')",
                    "$('#elementId')",
                    "getElementById('elementId')"
                ],
                "correctAnswer": 1
            },        
            {
                "id": 31,
                "topic": "React.js",
                "question": "What is React.js?",
                "answers": [
                    "An operating system",
                    "A JavaScript library for building user interfaces",
                    "A server-side framework",
                    "A database management system"
                ],
                "correctAnswer": 1
            },
            {
                "id": 32,
                "topic": "React.js",
                "question": "How do you define a state in a React component?",
                "answers": [
                    "Using the useState hook or this.state in a class component",
                    "state = useState({})",
                    "Using setState()",
                    "this.state = {}"
                ],
                "correctAnswer": 0
            },
            {
                "id": 33,
                "topic": "React.js",
                "question": "What is JSX in React?",
                "answers": [
                    "A package manager for React",
                    "A JavaScript testing framework",
                    "JavaScript XML, a syntax extension for JavaScript used with React",
                    "A state management library"
                ],
                "correctAnswer": 2
            },
            {
                "id": 34,
                "topic": "React.js",
                "question": "How do you pass data to a component in React?",
                "answers": [
                    "Using refs",
                    "Using context",
                    "Using state",
                    "Using props"
                ],
                "correctAnswer": 3
            },
            {
                "id": 35,
                "topic": "React.js",
                "question": "What lifecycle method is used for fetching data in a functional component in React?",
                "answers": [
                    "componentDidUpdate",
                    "componentWillUnmount",
                    "componentDidMount",
                    "useEffect"
                ],
                "correctAnswer": 3
            },
            {
                "id": 36,
                "topic": "React.js",
                "question": "What is the purpose of useState in React?",
                "answers": [
                    "To handle events",
                    "To define props",
                    "To manage state in functional components",
                    "To create global state"
                ],
                "correctAnswer": 2
            },
            {
                "id": 37,
                "topic": "React.js",
                "question": "How do you handle events in React?",
                "answers": [
                    "By using refs",
                    "By using context",
                    "Using event listeners",
                    "By defining event handlers like onClick and onChange"
                ],
                "correctAnswer": 3
            },
            {
                "id": 38,
                "topic": "React.js",
                "question": "What is a React fragment?",
                "answers": [
                    "A special type of component",
                    "A state management tool",
                    "An advanced CSS technique",
                    "A way to group elements without adding extra nodes to the DOM"
                ],
                "correctAnswer": 3
            },
            {
                "id": 39,
                "topic": "React.js",
                "question": "How do you conditionally render components in React?",
                "answers": [
                    "Using props",
                    "By defining state",
                    "Using the useEffect hook",
                    "Using conditional statements like if or ternary operators inside JSX"
                ],
                "correctAnswer": 3
            },
            {
                "id": 40,
                "topic": "React.js",
                "question": "What is the purpose of props.children in React?",
                "answers": [
                    "To define default props for a component",
                    "To handle asynchronous data fetching",
                    "To access and render the content passed between the opening and closing tags of a component",
                    "To manage state in a functional component"
                ],
                "correctAnswer": 2
            },
            
                {
                    "id": 41,
                    "topic": "MongoDB",
                    "question": "What is MongoDB?",
                    "answers": [
                        "A relational database management system",
                        "A NoSQL database management system",
                        "A programming language",
                        "An operating system"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 42,
                    "topic": "MongoDB",
                    "question": "What type of database is MongoDB?",
                    "answers": [
                        "Relational database",
                        "NoSQL database",
                        "Graph database",
                        "Document database"
                    ],
                    "correctAnswer": 3
                },
                {
                    "id": 43,
                    "topic": "MongoDB",
                    "question": "What is a collection in MongoDB?",
                    "answers": [
                        "A group of related tables",
                        "A group of related documents",
                        "A group of related fields",
                        "A group of related queries"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 44,
                    "topic": "MongoDB",
                    "question": "How do you insert a document in MongoDB?",
                    "answers": [
                        "INSERT INTO collection VALUES ({ })",
                        "db.collection.insertOne({ })",
                        "db.collection.addDocument({ })",
                        "mongo.insertDocument({ })"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 45,
                    "topic": "MongoDB",
                    "question": "What is the primary key in MongoDB?",
                    "answers": [
                        "_id",
                        "id",
                        "primary_key",
                        "key"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 46,
                    "topic": "MongoDB",
                    "question": "How do you query documents in MongoDB?",
                    "answers": [
                        "db.collection.find({ })",
                        "SELECT * FROM collection WHERE ...",
                        "db.collection.query({ })",
                        "mongo.queryDocuments({ })"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 47,
                    "topic": "MongoDB",
                    "question": "What is the purpose of ObjectId in MongoDB?",
                    "answers": [
                        "To identify a database",
                        "To uniquely identify documents in a collection",
                        "To define the structure of a document",
                        "To link collections together"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 48,
                    "topic": "MongoDB",
                    "question": "How do you update documents in MongoDB?",
                    "answers": [
                        "db.collection.update({ })",
                        "UPDATE collection SET ... WHERE ...",
                        "db.collection.updateOne({ })",
                        "mongo.updateDocument({ })"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 49,
                    "topic": "MongoDB",
                    "question": "What is aggregation in MongoDB?",
                    "answers": [
                        "Combining multiple databases into one",
                        "A collection of documents",
                        "An advanced method of querying data",
                        "A process of indexing documents"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 50,
                    "topic": "MongoDB",
                    "question": "How do you delete documents in MongoDB?",
                    "answers": [
                        "DELETE FROM collection WHERE ...",
                        "db.collection.remove({ })",
                        "db.collection.deleteOne({ })",
                        "mongo.deleteDocument({ })"
                    ],
                    "correctAnswer": 2
                },            
                {
                    "id": 51,
                    "topic": "Sql",
                    "question": "Which SQL keyword is used to count the number of records in a table?",
                    "answers": [
                        "COUNT",
                        "COUNT RECORDS",
                        "RECORD COUNT",
                        "COUNT ROWS"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 52,
                    "topic": "Sql",
                    "question": "What SQL keyword is used to sort the result-set?",
                    "answers": [
                        "ORDER",
                        "SORT",
                        "SORT BY",
                        "ORDER BY"
                    ],
                    "correctAnswer": 3
                },
                {
                    "id": 53,
                    "topic": "Sql",
                    "question": "Which statement is used to select data from a database?",
                    "answers": [
                        "SELECT",
                        "UPDATE",
                        "INSERT INTO",
                        "SELECT INTO"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 54,
                    "topic": "Sql",
                    "question": "What SQL keyword is used to count the number of distinct values in a column?",
                    "answers": [
                        "DISTINCT",
                        "COUNT DISTINCT",
                        "UNIQUE",
                        "UNIQUE COUNT"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 55,
                    "topic": "Sql",
                    "question": "How do you delete a record from a table in SQL?",
                    "answers": [
                        "DELETE",
                        "REMOVE",
                        "ERASE",
                        "DROP"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 56,
                    "topic": "Sql",
                    "question": "Which SQL statement is used to update data in a table?",
                    "answers": [
                        "UPDATE",
                        "MODIFY",
                        "CHANGE",
                        "ALTER"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 57,
                    "topic": "Sql",
                    "question": "What is the purpose of the WHERE clause in SQL?",
                    "answers": [
                        "To specify the columns to be included in the result set",
                        "To filter records that meet a specified condition",
                        "To order the result set",
                        "To group rows that have the same value"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 58,
                    "topic": "Sql",
                    "question": "What SQL keyword is used to retrieve data from multiple tables?",
                    "answers": [
                        "JOIN",
                        "MERGE",
                        "UNION",
                        "LINK"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 59,
                    "topic": "Sql",
                    "question": "Which SQL statement is used to create a new table?",
                    "answers": [
                        "CREATE TABLE",
                        "NEW TABLE",
                        "ADD TABLE",
                        "MAKE TABLE"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 60,
                    "topic": "Sql",
                    "question": "What is the purpose of the GROUP BY clause in SQL?",
                    "answers": [
                        "To sort the result set in ascending order",
                        "To specify the columns to be included in the result set",
                        "To group rows that have the same value",
                        "To filter records that meet a specified condition"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 61,
                    "topic": "Github",
                    "question": "How do you add changes to the staging area in Git?",
                    "answers": [
                        "git commit -m 'message'",
                        "git add .",
                        "git push origin master",
                        "git stage ."
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 62,
                    "topic": "Github",
                    "question": "What is a repository in GitHub?",
                    "answers": [
                        "A type of programming language",
                        "A cloud storage service",
                        "A collection of programming languages",
                        "A place to store project files and revision history"
                    ],
                    "correctAnswer": 3
                },
                {
                    "id": 63,
                    "topic": "Github",
                    "question": "What is a pull request in GitHub?",
                    "answers": [
                        "A request for someone to review and merge changes into a repository",
                        "A request to fork a repository",
                        "A request for access to private repositories",
                        "A request to delete a repository"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 64,
                    "topic": "Github",
                    "question": "What is Git?",
                    "answers": [
                        "A version control system",
                        "A programming language",
                        "An operating system",
                        "A cloud storage service"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 65,
                    "topic": "Github",
                    "question": "How do you create a new repository on GitHub?",
                    "answers": [
                        "By cloning an existing repository",
                        "Using the 'git init' command",
                        "Through the GitHub website or GitHub Desktop",
                        "By creating a new folder on your computer"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 66,
                    "topic": "Github",
                    "question": "What is a fork in GitHub?",
                    "answers": [
                        "A duplicate copy of a repository",
                        "A branch of a repository",
                        "A request to delete a repository",
                        "A request to merge changes into a repository"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 67,
                    "topic": "Github",
                    "question": "How do you clone a repository in Git?",
                    "answers": [
                        "git fetch <repository_url>",
                        "git pull <repository_url>",
                        "git clone <repository_url>",
                        "git copy <repository_url>"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 68,
                    "topic": "Github",
                    "question": "What is the purpose of Git branching?",
                    "answers": [
                        "To create multiple copies of a repository",
                        "To delete branches in a repository",
                        "To merge changes into a repository",
                        "To isolate work in progress from the main codebase"
                    ],
                    "correctAnswer": 3
                },
                {
                    "id": 69,
                    "topic": "Github",
                    "question": "Which statement best describes a Git commit?",
                    "answers": [
                        "A snapshot of changes made to a repository",
                        "A command to delete branches in a repository",
                        "A request to merge changes into a repository",
                        "A command to undo changes in a repository"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 70,
                    "topic": "Github",
                    "question": "What is a Git repository?",
                    "answers": [
                        "A place to store project files and revision history",
                        "A collection of programming languages",
                        "A type of programming language",
                        "A cloud storage service"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 71,
                    "topic": "Node.js",
                    "question": "What is a callback function in Node.js?",
                    "answers": [
                        "A function passed as an argument to another function to be executed later",
                        "A function that executes immediately after it's defined",
                        "A function used to handle errors in Node.js applications",
                        "A function used to terminate Node.js processes"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 72,
                    "topic": "Node.js",
                    "question": "What is the purpose of the `Buffer` class in Node.js?",
                    "answers": [
                        "To handle TCP connections",
                        "To manage file system operations",
                        "To handle binary data",
                        "To execute JavaScript code outside of a browser"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 73,
                    "topic": "Node.js",
                    "question": "How can you handle file uploads in Node.js?",
                    "answers": [
                        "Using the `fs` module",
                        "Using the `http` module",
                        "Using the `express` framework",
                        "Using the `upload` module"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 74,
                    "topic": "Node.js",
                    "question": "What is middleware in the context of Express.js?",
                    "answers": [
                        "A type of database in Node.js",
                        "A security feature in Node.js applications",
                        "A function that receives the request and response objects",
                        "A software module that handles application logic"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 75,
                    "topic": "Node.js",
                    "question": "How do you handle environment variables in Node.js applications?",
                    "answers": [
                        "Using the `env` module",
                        "Using the `config` module",
                        "Using the `dotenv` module",
                        "Using the `variables` module"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 76,
                    "topic": "Node.js",
                    "question": "What is the role of the `npm` command in Node.js?",
                    "answers": [
                        "To manage project dependencies and packages",
                        "To run Node.js applications in a browser",
                        "To generate HTML files from Node.js applications",
                        "To create new Node.js modules"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 77,
                    "topic": "Node.js",
                    "question": "How do you handle errors in asynchronous operations in Node.js?",
                    "answers": [
                        "Using the `try...catch` statement",
                        "Using synchronous functions only",
                        "Using the `error` event",
                        "Using callbacks and promises"
                    ],
                    "correctAnswer": 3
                },
                {
                    "id": 78,
                    "topic": "Node.js",
                    "question": "What is the purpose of the `fs` module in Node.js?",
                    "answers": [
                        "To manage web server operations",
                        "To handle file system operations",
                        "To create web applications",
                        "To fetch data from external APIs"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 79,
                    "topic": "Node.js",
                    "question": "What is the role of the `process` object in Node.js?",
                    "answers": [
                        "To manage the current Node.js application",
                        "To handle TCP connections",
                        "To manage HTTP requests",
                        "To handle user authentication"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 80,
                    "topic": "Node.js",
                    "question": "How can you execute child processes in Node.js?",
                    "answers": [
                        "Using the `child_process` module",
                        "Using the `execute` module",
                        "Using the `process` module",
                        "Using the `spawn` function"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 81,
                    "topic": "Express.js",
                    "question": "What is Express.js?",
                    "answers": [
                        "A front-end JavaScript framework",
                        "A back-end JavaScript framework",
                        "A relational database management system",
                        "A cloud storage service"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 82,
                    "topic": "Express.js",
                    "question": "Which command is used to install Express.js in a Node.js project?",
                    "answers": [
                        "npm install express",
                        "npm add express",
                        "npm setup express",
                        "npm start express"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 83,
                    "topic": "Express.js",
                    "question": "What is middleware in the context of Express.js?",
                    "answers": [
                        "A type of database in Node.js",
                        "A security feature in Node.js applications",
                        "A function that receives the request and response objects",
                        "A software module that handles application logic"
                    ],
                    "correctAnswer": 2
                },
                {
                    "id": 84,
                    "topic": "Express.js",
                    "question": "How do you handle HTTP POST requests in Express.js?",
                    "answers": [
                        "Using the `GET` method",
                        "Using the `POST` method",
                        "Using the `handlePOST` function",
                        "Using the `request` module"
                    ],
                    "correctAnswer": 1
                },
                {
                    "id": 85,
                    "topic": "Express.js",
                    "question": "Which template engine is commonly used with Express.js?",
                    "answers": [
                        "Handlebars",
                        "React.js",
                        "Angular.js",
                        "Vue.js"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 86,
                    "topic": "Express.js",
                    "question": "How do you handle routing in Express.js?",
                    "answers": [
                        "Using the `route` module",
                        "Using the `navigate` function",
                        "Using the `path` module",
                        "Using the `app.get`, `app.post`, etc., methods"
                    ],
                    "correctAnswer": 3
                },
                {
                    "id": 87,
                    "topic": "Express.js",
                    "question": "What is the purpose of middleware in Express.js?",
                    "answers": [
                        "To manage HTTP requests and responses",
                        "To create web components",
                        "To execute JavaScript code outside of a browser",
                        "To handle file system operations"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 88,
                    "topic": "Express.js",
                    "question": "How do you handle static files in Express.js?",
                    "answers": [
                        "Using the `static` middleware",
                        "Using the `file` module",
                        "Using the `fs` module",
                        "Using the `serve` module"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 89,
                    "topic": "Express.js",
                    "question": "Which method is used to start an Express.js server?",
                    "answers": [
                        "app.listen()",
                        "server.start()",
                        "express.start()",
                        "app.run()"
                    ],
                    "correctAnswer": 0
                },
                {
                    "id": 90,
                    "topic": "Express.js",
                    "question": "What is the role of `app.use()` in Express.js?",
                    "answers": [
                        "To define middleware functions",
                        "To include external modules",
                        "To handle HTTP requests",
                        "To define route parameters"
                    ],
                    "correctAnswer": 0
                }
]
export default QUESTIONS;