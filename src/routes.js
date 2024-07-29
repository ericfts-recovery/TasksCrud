import { randomUUID } from "node:crypto"
import { Database } from "./database.js"
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database()

export const routes = [
    {
        // List all the tasks
        method: "GET",
        path: "localhost",
        handler: (req, res) => {

        }
    },
    {
        // Create a task
        method: "POST",
        path: "localhost",
        handler: (req, res) => {

        }
    },
    {
        // Update a task by ID
        method: "PUT",
        path: "localhost",
        handler: (req, res) => {

        }
    },
    {
        // Update the completed status of a task by ID
        method: "PUT",
        path: "localhost",
        handler: (req, res) => {

        }
    },
    {
        // Delete a task by ID
        method: "DELETE",
        path: "localhost",
        handler: (req, res) => {

        }
    }
]