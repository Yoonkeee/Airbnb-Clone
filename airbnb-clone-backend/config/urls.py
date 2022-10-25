from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/rooms/", include("rooms.urls")),
    path("api/categories/", include("categories.urls")),
    path("api/experiences/", include("experiences.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
