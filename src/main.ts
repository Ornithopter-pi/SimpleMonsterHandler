import Express from "express";
import { checkHidden, enemies } from "./enemyList.js";
const app = Express();

const port = 8080;

const myResponse = {
    port: port
};

app.get("/", (_req, res) => {
    res.send(`Hey, you're on ${port}`);
})

app.get("/api", (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(myResponse))
})

app.get("/listAllEnemies", (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(checkHidden(enemies)))
})
app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})