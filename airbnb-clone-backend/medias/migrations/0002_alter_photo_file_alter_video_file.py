# Generated by Django 4.1.1 on 2022-10-25 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("medias", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="photo",
            name="file",
            field=models.URLField(),
        ),
        migrations.AlterField(
            model_name="video",
            name="file",
            field=models.URLField(),
        ),
    ]
