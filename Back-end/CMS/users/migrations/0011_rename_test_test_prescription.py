# Generated by Django 4.2.2 on 2023-07-04 04:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_rename_prescription_test_test'),
    ]

    operations = [
        migrations.RenameField(
            model_name='test',
            old_name='test',
            new_name='prescription',
        ),
    ]