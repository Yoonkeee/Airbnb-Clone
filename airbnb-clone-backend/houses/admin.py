from django.contrib import admin
from .models import House


@admin.register(House)  # 아래의 class가 House Model을 통제할 것이라는 뜻
class HouseAdmin(admin.ModelAdmin):

    list_display = ("name", "price_per_night", "address", "pets_allowed")
    list_filter = ("price_per_night", "pets_allowed")
