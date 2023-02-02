from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Wallet(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=250, default='')
  create_date = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name