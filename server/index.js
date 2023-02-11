import { createRequire } from 'module';


const require = createRequire(import.meta.url)
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


app.get("/api", (req, res) => {
  res.json({
    message:"Hello world",
  })
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})