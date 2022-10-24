from tabnanny import verbose
from django.db import models


class House(models.Model):
    def __str__(self) -> str:
        return self.name

    # House Model
    name = models.CharField(max_length=140)
    price_per_night = models.PositiveBigIntegerField(
        verbose_name="Price", help_text="Positive Numbers Only"
    )
    description = models.TextField()
    address = models.CharField(max_length=140)
    pets_allowed = models.BooleanField(default=True, verbose_name="Pets Allowed?")

    owner = models.ForeignKey("users.User", on_delete=models.CASCADE)
