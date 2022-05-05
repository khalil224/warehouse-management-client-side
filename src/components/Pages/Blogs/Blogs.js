import React from 'react';
import './blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h4 className='mb-3'>Q1. Difference between javascript and nodejs</h4>
            <div className='container'>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Javascript</th>
                        <th>NodeJS</th>

                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>
                            Javascript is a programming language that is used for writing scripts on the website. </td>
                        <td>NodeJS is a runtime environment where Javascript can run .</td>

                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Javascript run only in the browsers.</td>
                        <td> Javascript may run outside the browser with the help of NodeJS.</td>

                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>It is basically used on the client-side.</td>
                        <td>It is mostly used on the server-side.</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Javascript is able to add HTML and play with the DOM</td>
                        <td>Nodejs is unable to add HTML tags</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                        <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>	Javascript is used only in frontend development</td>
                        <td>Nodejs is used in server-side development.</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                        <td>Nodejs is written in C, C++ and Javascript.</td>
                    </tr>
                </table>
            </div>
            <h4 className='mt-4 mb-3'>Q2. When should we use NodeJS and  MongoDB? </h4>
            <h5>NodeJS is a Javascript runtime environment whereas MongoDB is a database engine. We use NodeJS to run Javascript outside the server and mongoDB to Create, Read, Update and Delete data. When we need to connect our client site to database by it's server site, we use NodeJS.  </h5>
            <h4 className='mt-4 mb-3'>Q3. Differences between SQL and NoSQL databases.</h4>
            <div className='container'>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>SQL</th>
                        <th>NoSQL</th>
                    </tr>
                    <tr>
                        <td>1.</td>
                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                        <td>Non-relational or distributed database system.</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>These databases have fixed or static or predefined schema</td>
                        <td>They have dynamic schema</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>These databases are not suited for hierarchical data storage.</td>
                        <td>These databases are best suited for hierarchical data storage.</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>These databases are best suited for complex queries</td>
                        <td>These databases are not so good for complex queries</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Vertically Scalable</td>
                        <td>	Horizontally scalable</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Follows ACID property</td>
                        <td>Follows CAP(consistency, availability, partition tolerance)</td>
                    </tr>
                </table>
            </div>

        </div>
    );
};

export default Blogs;