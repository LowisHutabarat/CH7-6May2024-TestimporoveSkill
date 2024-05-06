
const express = require("express")
const PORT = process.env.PORT || "8000"

const app = express()

app.listen(PORT, () => {
console.log(`SERVER JALAN DI PORT : ${PORT}`);
});