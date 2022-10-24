from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/rooms/", include("rooms.urls")),
    path("api/categories/", include("categories.urls")),
    path("api/experiences/", include("experiences.urls")),
]
