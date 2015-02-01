# -*- coding: utf8 -*-

import json

from sqlalchemy import MetaData, Table, Column, String, Integer
from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.security import Security, SQLAlchemyUserDatastore, \
    UserMixin, RoleMixin, login_required


DB = SQLAlchemy() 

## User and roles

roles_users = DB.Table('roles_users',
        DB.Column('users_id', DB.Integer(), DB.ForeignKey('users.id')),
        DB.Column('roles_id', DB.Integer(), DB.ForeignKey('roles.id')))

class Roles(DB.Model, RoleMixin):
    id = DB.Column(DB.Integer(), primary_key=True)
    name = DB.Column(DB.String(80), unique=True)
    description = DB.Column(DB.String(255))


class Users(DB.Model, UserMixin):
    id = DB.Column(DB.Integer, primary_key=True)
    email = DB.Column(DB.String(255), unique=True)
    password = DB.Column(DB.String(255))
    active = DB.Column(DB.Boolean())
    confirmed_at = DB.Column(DB.DateTime())
    roles = DB.relationship('Roles', secondary=roles_users,
                            backref=DB.backref('users', lazy='dynamic'))




#APP data

# 流水號,華語,漢字,台羅,出處,理由
class Suggestions(DB.Model):
    __tablename__ = 'suggestions'

    id = Column(Integer, primary_key=True)
    question = Column(String, nullable=False)
    foreign_language = Column(String)
    sinograms = Column(String)
    romanization = Column(String)
    source = Column(String)
    justification = Column(String)

    def to_dict(self):
        return {k: self.__dict__[k] for k in self.__table__.columns.keys()}

    def __repr__(self):
        return (u"<Suggestion( %s 台語會當講「%s」(%s) )>" % (self.question, self.sinograms, self.romanization)).encode("utf8")



