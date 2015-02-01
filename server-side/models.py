# -*- coding: utf8 -*-

import json

from sqlalchemy import MetaData, Table, Column, String, Integer


from server import DB


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



