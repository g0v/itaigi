
新台語·運動
===========

* [專案 Hackpad](https://g0v.hackpad.com/moed7ct-taigi-neologism)

Usage
-----

## Frontend

Install:

        $ npm i && npm run build


Start development server:

        $ npm run dev
        # open http://localhost:3000/

## Backend

The backend runs on Python 2.x.

        $ cd server-side
        $ pip install -r packages
        $ python create_database.py
        $ python server.py
        # check out <http://0.0.0.0:8001/api/suggestions/%E8%A6%81%E8%A1%9D>

Development
-----------

Server-side API document: <http://docs.taigineologism.apiary.io/>

License
-------

MIT License <http://g0v.mit-license.org/>
