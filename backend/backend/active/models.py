from django.db import models
from wallet.models import Wallet

# Create your models here.
class Active(models.Model):
  wallets = models.ForeignKey(Wallet, on_delete=models.CASCADE, null=True, blank=True)
  name = models.CharField(max_length=100)
  data_purchase = models.DateField()
  institution = models.CharField(max_length=100)
  amount = models.IntegerField()
  price_paid = models.FloatField()
  invested_price = models.FloatField()
  brokerage_rate = models.FloatField()
  create_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name
