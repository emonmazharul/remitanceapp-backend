/**
 * Ensure that a user is logged in before proceeding to next route middleware.
 *
 * This middleware ensures that a user is logged in.  If a request is received
 * that is unauthenticated, the request will be redirected to a login page (by
 * default to `/login`).
 *
 * Additionally, `returnTo` will be be set in the session to the URL of the
 * current request.  After authentication, this value can be used to redirect
 * the user to the page that was originally requested.
 *
 * Options:
 *   - `redirectTo`   URL to redirect to for login, defaults to _/login_
 *   - `setReturnTo`  set redirectTo in session, defaults to _true_
 *
 * Examples:
 *
 *     app.get('/profile',
 *       ensureLoggedIn(),
 *       function(req, res) { ... });
 *
 *     app.get('/profile',
 *       ensureLoggedIn('/signin'),
 *       function(req, res) { ... });
 *
 *     app.get('/profile',
 *       ensureLoggedIn({ redirectTo: '/session/new', setReturnTo: false }),
 *       function(req, res) { ... });
 *
 */

  // @param {Object} options
  // @return {Function}
//  @api public


 module.exports = function ensureLoggedIn(options) {

  var defaultOptions = {
    statusCode:401,
    redirectTo:'/login',
  }
  
  if(Boolean(options) == false) {
    options = {};
  }

  if (typeof options == 'string') {
    options = { redirectTo: options }
  }
  options.statusCode = options.statusCode ? options.statusCode : defaultOptions.statusCode;
  options.redirectTo = options.redirectTo ? options.redirectTo : defaultOptions.redirectTo;


  var setReturnTo = (options.setReturnTo === undefined) ? true : options.setReturnTo;
  
  if(options.responseData) {
    return function(req, res, next) {
      if (!req.isAuthenticated || !req.isAuthenticated()) {
        if (setReturnTo && req.session) {
          req.session.returnTo = req.originalUrl || req.url;
        }
        return res.status(options.statusCode).send(options.responseData);
      }
      next();
    }
  }


  var url = options.redirectTo || '/login';
  
  return function(req, res, next) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      if (setReturnTo && req.session) {
        req.session.returnTo = req.originalUrl || req.url;
      }
      return res.redirect(url);
    }
    next();
  }
}
