module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("EMS Project...");
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`logging on port ${PORT}`);
  });
};
