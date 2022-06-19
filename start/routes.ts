import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})


Route.get("register", "AuthController.registerShow").as("auth.register.show");
Route.post("register", "AuthController.register").as("auth.register");
Route.get("login", "AuthController.loginShow").as("auth.login.show");
Route.post("login", "AuthController.login").as("auth.login");
Route.get("logout", "AuthController.logout").as("auth.logout");