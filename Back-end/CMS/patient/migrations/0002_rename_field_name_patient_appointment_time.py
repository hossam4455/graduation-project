# Generated by Django 4.1.5 on 2023-04-19 15:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='field_name',
            new_name='appointment_time',
        ),
    ]
