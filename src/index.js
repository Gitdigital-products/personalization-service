const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "personalization-service" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Personalization service running on port ${PORT}`);
});
