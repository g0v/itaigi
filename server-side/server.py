#!/usr/bin/env python
#-*- coding:utf-8 -*-

import os
import sys
import logging


from flask import Flask, Response
from flask import render_template
from flask import abort, request, jsonify

from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.security import Security, SQLAlchemyUserDatastore, \
    UserMixin, RoleMixin, login_required


from models import DB, Users, Roles, Suggestions
from admin import admin

logger = logging.getLogger('taigi-neologism')

# Flask Application
app = Flask(__name__)
app.debug = True
# app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'

# Setup DB
DB.app = app
DB.init_app(app)

# Setup Flask-Security
SECRETKEY_FILE = "secret.key"
try:
    with open(SECRETKEY_FILE) as sk:
        app.secret_key = sk.read()
except IOError:
    logger.error("no secret key file, use create_database.py to generate it")
    app.secret_key = os.urandom(20)

user_datastore = SQLAlchemyUserDatastore(DB, Users, Roles)
security = Security(app, user_datastore)

# Setup Administration pages
admin.init_app(app)



# API URLs
@app.route('/api/suggestions/<question>')
def api_suggestions(question):
    data = Suggestions.query.filter_by(question=question).all()
    return jsonify({'status':'ok', 'results':[ x.to_dict() for x in data]})

# RUN
def main():
    app.run("0.0.0.0", 8001)

if __name__ == '__main__':
    sys.exit(main())
