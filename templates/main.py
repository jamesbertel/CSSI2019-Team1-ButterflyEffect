
import webapp2
import jinja2
import os
from google.appengine.ext import ndb

the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class EnterInfoHandler(webapp2.RequestHandler):
    def get(self):
        start_template = the_jinja_env.get_template("/pages/login.html")
        self.response.write(start_template.render())

    def post(self):
        username = self.request.get('user-fav-food')
        print(username)
        username.put()


        end_template = the_jinja_env.get_template("/pages/story.html")
        self.response.write(end_template.render())


app = webapp2.WSGIApplication([
    ('/', EnterInfoHandler)
], debug=True)
