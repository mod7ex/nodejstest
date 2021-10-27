let midLogger = (req, res, next) => {
      const method = req.method;
      const url = req.url;
      const time = new Date().getFullYear();

      console.log(method, url, time);

      next();
};

let authorize = (req, res, next) => {
      let { user } = req.query;

      if (user === "mourad") {
            req.user = { name: "Mourad", id: 16 };
            console.log("authorize");
            next();
            return;
      }
      res.status(401).end("<h1>Not allowed</h1>");
};

module.exports = { midLogger, authorize };
