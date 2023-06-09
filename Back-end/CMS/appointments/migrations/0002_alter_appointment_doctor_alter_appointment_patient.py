# Generated by Django 4.2.2 on 2023-06-18 02:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('appointments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='doctor',
            field=models.ForeignKey(limit_choices_to={'role': 'doctor'}, on_delete=django.db.models.deletion.CASCADE, related_name='doctor_appointments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='patient',
            field=models.ForeignKey(limit_choices_to={'role': 'patient'}, on_delete=django.db.models.deletion.CASCADE, related_name='patient_appointments', to=settings.AUTH_USER_MODEL),
        ),
    ]
