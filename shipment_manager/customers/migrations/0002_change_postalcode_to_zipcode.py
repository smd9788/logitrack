# Generated by Django 2.2.6 on 2019-11-03 22:11

from django.db import migrations
import localflavor.us.models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='postal_code',
        ),
        migrations.AddField(
            model_name='customer',
            name='zip_code',
            field=localflavor.us.models.USZipCodeField(default='00000', max_length=10),
            preserve_default=False,
        ),
    ]
