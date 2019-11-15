from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('client.urls')),
    path('', include('customers.urls')),
    path('admin/', admin.site.urls),
]
