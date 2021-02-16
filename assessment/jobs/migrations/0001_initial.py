# Generated by Django 3.1.1 on 2021-02-16 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('JobTitle', models.TextField(max_length=100)),
                ('Company', models.TextField()),
                ('Location', models.TextField()),
                ('Lists', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Lists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Description', models.TextField()),
                ('Image', models.TextField()),
                ('Curator', models.TextField()),
            ],
        ),
    ]
