const express = require("express");
const app = express();
const port = 3001;

const items = {
  data: [
    {
      description: "Fast foods, potatoes, hash browns, rnd pieces or patty",
      kcal: 272,
      protein_g: 2.58,
      carbohydrate_g: 28.88,
      sugar_g: 0.56,
    },
    {
      description: "Chick-fil-a, hash browns",
      kcal: 301,
      protein_g: 3,
      carbohydrate_g: 30.51,
      sugar_g: 0.54,
    },
    {
      description: "Denny's, hash browns",
      kcal: 197,
      protein_g: 2.49,
      carbohydrate_g: 26.59,
      sugar_g: 1.38,
    },
    {
      description: "Restaurant, family style, hash browns",
      kcal: 197,
      protein_g: 2.49,
      carbohydrate_g: 26.59,
      sugar_g: 1.38,
    },
  ],
};

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
