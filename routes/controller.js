router.get('/index1', function(req, res, next) {
  res.render('index1', user1);
});

<% from "json.html" import obj %>