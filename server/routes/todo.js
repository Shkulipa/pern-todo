const express = require("express");
const router = express.Router();

// database
const pool = require("../db/db");

router
	.post("/", async (req, res) => {
		try {
			const { description } = req.body;
			const newTodo = await pool.query(
				"INSERT INTO todo(description, date) VALUES($1, NOW()) RETURNING *",
				[description]
			);

			res.json(newTodo.rows);
		} catch (e) {
			console.error(e);
		}
	})

	.get("/", async (req, res) => {
		try {
			const allTodos = await pool.query("SELECT * FROM todo ORDER BY date DESC");

			res.json(allTodos.rows);
		} catch (e) {
			console.error(e);
		}
	})

	.get("/:id", async (req, res) => {
		try {
			const { id } = req.params;
			const todo = await pool.query(
				"SELECT * FROM todo WHERE todo_id=$1",
				[id]
			);

			res.json(todo.rows);
		} catch (e) {
			console.error(e);
		}
	})

	.put("/:id", async (req, res) => {
		try {
			const { id } = req.params;
			const { description } = req.body;

			await pool.query(
				"UPDATE todo SET description = $1, date=NOW() WHERE todo_id = $2",
				[description, id]
			);

			res.json("Todo was updated");
		} catch (e) {
			console.error(e);
		}
	})

	.delete("/:id", async (req, res) => {
		try {
			const { id } = req.params;

			const delTodo = await pool.query(
				"DELETE FROM todo WHERE todo_id = $1",
				[id]
			);

			res.json("Todo was deleted!");
		} catch (e) {
			console.error(e);
		}
	});

module.exports = router;
