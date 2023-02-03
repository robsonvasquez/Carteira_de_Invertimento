from rest_framework.viewsets import ModelViewSet
from wallet.api.serializers import WalletSerializer
from wallet.models import Wallet

class WalletViewSet(ModelViewSet):
  queryset = Wallet.objects.all()
  serializer_class = WalletSerializer