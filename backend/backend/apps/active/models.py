from django.db import models
from django.core.validators import MinValueValidator, DecimalValidator
# from apps.wallet.models import Wallet

class Active(models.Model):
  wallet = models.ForeignKey("wallet.Wallet", on_delete=models.CASCADE, null=True)
  name = models.CharField(max_length=100, blank=False)
  data_purchase = models.DateField()
  institution = models.CharField(max_length=100, default='', blank=True)
  amount = models.IntegerField(default=0, validators=[MinValueValidator(0)], blank=False)
  price_paid = models.DecimalField(default=0.0, validators=[MinValueValidator(0.0)], max_digits=10, decimal_places=2, blank=False)
  invested_price = models.DecimalField(default=0.0, validators=[MinValueValidator(0.0)], max_digits=10, decimal_places=2, blank=False)
  # rever taxa de corretagem
  brokerage_rate = models.DecimalField(default=0.0, validators=[MinValueValidator(0.0)], max_digits=10, decimal_places=2, blank=True)
  create_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.name
