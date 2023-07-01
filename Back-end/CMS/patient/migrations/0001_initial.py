# Generated by Django 4.2.2 on 2023-06-30 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('doctor', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patient_name', models.CharField(blank=True, max_length=200)),
                ('appointment_datetime', models.DateField(null=True)),
                ('appointment_time', models.TimeField()),
                ('doctor_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='doctor_patient', to='doctor.doctor')),
            ],
        ),
    ]
