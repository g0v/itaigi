#-*- coding:utf-8 -*-
""" Administation blueprint
"""
from flask import request
from flask import redirect, url_for

from flask.ext.admin import Admin, AdminIndexView
from flask.ext.admin import expose, helpers
from flask.ext.admin.contrib.sqla import ModelView

from flask.ext.security import current_user, login_user, logout_user
from flask_security.forms import LoginForm

from models import DB, Users, Suggestions

# Create customized index view class that handles login
class MyAdminIndexView(AdminIndexView):

    @expose('/')
    def index(self):
        if not current_user.is_authenticated():
            return redirect(url_for('security.login'))
        return super(MyAdminIndexView, self).index()

#    @expose('/login/', methods=('GET', 'POST'))
#    def login_view(self):
#        # handle user login
#        form = LoginForm(request.form)
#        if helpers.validate_form_on_submit(form):
#            user = Users.query.filter_by(email=form.email.data).first()
#            login_user(user)
#
#        if current_user.is_authenticated():
#            return redirect(url_for('.index'))
#        return form
#        link = ''
#        self._template_args['form'] = form
#        self._template_args['link'] = link
#        return super(MyAdminIndexView, self).index()
#
    @expose('/logout/')
    def logout_view(self):
        logout_user()
        return redirect(url_for('.index'))


class UserView(ModelView):
    # Override displayed fields
    column_list = ('email', 'confirmed_at', 'password')

    def is_accessible(self):
        return current_user.is_authenticated()



class SuggestionsView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated()

## Create the admin blueprint
#admin = Admin(name=u'新台語 運動', index_view=MyAdminIndexView(), base_template='admin_master.html', template_mode='bootstrap3')
admin = Admin(name=u'新台語 運動', index_view=MyAdminIndexView())

admin.add_view(UserView(Users, DB.session))
admin.add_view(SuggestionsView(Suggestions, DB.session))
#admin.add_view(ModelView(Suggestions, DB.session))

