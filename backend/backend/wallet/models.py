from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Wallet(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False)
  name = models.CharField(max_length=100, default='', null=False, blank=False)
  description = models.CharField(max_length=256, default='', null=True, blank=True)
  variation = models.FloatField(default=0.0, null=True, blank=True)
  create_date = models.DateTimeField(auto_now_add=True, null=False, blank=False)

  def __str__(self):
    return self.name

