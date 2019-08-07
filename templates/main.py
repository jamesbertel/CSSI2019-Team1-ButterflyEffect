
import webapp2
import jinja2
import os
from google.appengine.ext import ndb
from user import User

the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class EnterInfoHandler(webapp2.RequestHandler):
    def get(self):
        start_template = the_jinja_env.get_template("/pages/login.html")
        self.response.write(start_template.render())

    def post(self):
        self.response.write("A post request to the EnterInfoHandler")

class PlayGame(webapp2.RequestHandler):
    def post(self):
        results_template = the_jinja_env.get_template("/pages/story.html")
        user_name = self.request.get('user-first-ln')
        self.response.write(results_template.render())

        username = User(username = user_name)
        username.put()
        #the_variable_dict = {"line1": user_name}
        #self.response.write(results_template.render(the_variable_dict))


app = webapp2.WSGIApplication([
    ('/', EnterInfoHandler),
    ('/thegame', PlayGame)
], debug=True)
