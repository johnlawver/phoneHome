require("dotenv").config();
const chalk = require("chalk");

async function getNasa() {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${process.env.NASA_API}`
  );
  const payload = await response.json();
  console.log(chalk.underline.green("Pictures from Mars!"));
  payload.photos.forEach((photo) => console.log(photo.img_src));
}

getNasa();
