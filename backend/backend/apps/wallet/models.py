from django.contrib.auth.models import User
from django.db import models

from apps.active.models import Active

class Wallet(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  name = models.CharField(max_length=100, blank=False)
  description = models.CharField(max_length=256, default='', blank=True)
  create_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name

  # @property
  def variation():
    print(Active.object.all())
    
    # models.FloatField(default=0.0, editable=False)