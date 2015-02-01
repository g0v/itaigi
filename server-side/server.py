#!/usr/bin/env python
#-*- coding:utf-8 -*-


import sys
import logging


from flask import Flask, Response
from flask import render_template
from flask import abort, request, jsonify

from flask.ext.sqlalchemy import SQLAlchemy

# create our little application :)
app = Flask(__name__)
app.debug = True
app.jinja_env.add_extension('pyjade.ext.jinja.PyJadeExtension')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite'

DB = SQLAlchemy(app) 

# API URLs
@app.route('/api/suggestions/<question>')
def api_suggestions(question):
    from models import Suggestions
    data = Suggestions.query.filter_by(question=question).all()
    return jsonify({'status':'ok', 'results':[ x.to_dict() for x in data]})

# RUN
def main():
    app.run("0.0.0.0", 8001)

if __name__ == '__main__':
    sys.exit(main())
