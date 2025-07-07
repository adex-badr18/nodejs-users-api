import e from "express";
import "dotenv/config";

export const app = e();
const PORT = process.env.PORT || 4000;

app.use(e.json());

app.get("/", (req, res) => {
    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Welcome to Users API</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                        line-height: 1.6;
                        color: #333;
                    }
                    h1 {
                        color: #4f46e5;
                    }
                    ul {
                        list-style: none;
                        padding-left: 0;
                    }
                    li {
                        background: #fff;
                        margin-bottom: 10px;
                        padding: 10px;
                        border-left: 5px solid #4f46e5;
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    }
                    code {
                        font-weight: bold;
                        background-color: #eef;
                        padding: 2px 6px;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to Users API</h1>
                <p>This API allows you to perform CRUD operations on user records.</p>
                <h2>Available Routes:</h2>
                <ul>
                    <li><code>GET /</code> – Home Page</li>
                    <li><code>GET /users</code> – Fetches a list of all users.</li>
                    <li><code>GET /users/:id</code> – Fetches a user by ID.</li>
                    <li><code>POST /users</code> – Creates a new user.</li>
                    <li><code>PUT /users/:id</code> – Updates a user record.</li>
                    <li><code>DELETE /users/:id</code> – Deletes a user record.</li>
                </ul>
            </body>
            </html>
        `);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
