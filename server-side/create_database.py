# -*- coding: utf8 -*-

import os
import codecs

import models
from server import app, user_datastore, SECRETKEY_FILE




def main():    
    print("Create secret key")
    with open(SECRETKEY_FILE, 'wb') as sk:
        sk.write(os.urandom(24))
    models.DB.create_all()
    with app.app_context():
        user_datastore.create_user(email="root@localhost", password="changeit")
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

