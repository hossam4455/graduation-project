# Generated by Django 4.1.5 on 2023-06-16 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='name',
            new_name='doctor_name',
        ),
    ]
