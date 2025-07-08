import { validateUser } from "../utils/validations.js";
import { pool } from "../data/db.js";

export const getUsers = async (req, res) => {
    try {
        const { rows, rowCount } = await pool.query("SELECT * FROM users");
        res.status(200).json({ users: rows, count: rowCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Internal Server Error",
            status: 500,
        });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
            id,
        ]);
        if (rows.length === 0) {
            return res.status(404).json({
                error: "Not Found",
                message: "User not found",
                status: 404,
            });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Internal Server Error",
            status: 500,
        });
    }
};

export const createUser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({
            error: "Bad Request",
            message: error.details[0].message,
            status: 400,
        });
    }

    const { name, email, age } = req.body;

    try {
        const { rows } = await pool.query(
            "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
            [name, email, age]
        );
        res.status(201).json({
            user: rows[0],
            message: "User created successfully",
            status: 201,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Internal Server Error",
            status: 500,
        });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).json({
            error: "Bad Request",
            message: error.details[0].message,
            status: 400,
        });
    }

    if (!req.body.age) {
        return res.status(400).json({
            error: "Bad Request",
            message: "Age is required for update",
            status: 400,
        });
    }

    const { name, email, age } = req.body;

    try {
        const { rowCount, rows } = await pool.query(
            "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
            [name, email, age, id]
        );
        // Check if any rows were updated
        if (rowCount === 0) {
            return res.status(404).json({
                error: "Not Found",
                message: `User with ID ${id} not found.`,
                status: 404,
            });
        }

        // If the update was successful, return a success message
        res.json({
            message: "User updated successfully",
            status: 200,
            user: rows[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Internal Server Error",
            status: 500,
        });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const { rowCount } = await pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [id]
        );
        if (rowCount === 0) {
            return res.status(404).json({
                error: "Not Found",
                message: `User with ID ${id} not found.`,
                status: 404,
            });
        }
        res.status(204).send({ message: "User deleted successfully", status: 204, userId: id });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error",
            message: error.message || "Internal Server Error",
            status: 500,
        });
    }
};
