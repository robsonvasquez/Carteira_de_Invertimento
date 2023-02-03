from django.db import models
from apps.user.models import User

class Nofification(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  title = models.CharField(max_length=100, blank=False)
  description = models.CharField(max_length=256, default='', blank=True)
  create_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.title
