# -*- coding: utf8 -*-

import codecs
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import models

def main():
    models.DB.create_all()
    #load exemple data (TODO: will have to be replaced)
    datafile = codecs.open("phrases.csv", "r", "utf8")
    datafile.readline()
    for line in datafile:
        fields = line.strip().split(",")
        suggestion = models.Suggestions(question=fields[1],
                                        foreign_language=u"國語",
                                        sinograms=fields[2],
                                        romanization=fields[3],
                                        source=fields[4],
                                        justification=fields[5])
        models.DB.session.add(suggestion)
        print suggestion, "added to db"
    models.DB.session.commit()


if __name__ == "__main__":
    main()

