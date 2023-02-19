from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

from apps.user.models import User
from apps.user.api.serializers import UserSerializer
from apps.wallet.api.serializers import WalletSerializer
from apps.notification.api.serializers import NotificationSerializer

class UserViewSet(ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  
  permission_classes = (IsAuthenticated,)
  
  @action(detail=False, methods=['get'])
  def wallets(self, request, *args, **kwargs):

    user = Token.objects.get(key=self.request.auth).user
    
    self.serializer_class = WalletSerializer

    queryset = self.filter_queryset(user.wallet_set.all())

    page = self.paginate_queryset(queryset)
    if page is not None:
      serializer = self.get_serializer(page, many=True)
      return self.get_paginated_response(serializer.data)

    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)

  @action(detail=False, methods=['get'])
  def notifications(self, request, *args, **kwargs):
    
    user = Token.objects.get(key=self.request.auth).user
  
    self.serializer_class = NotificationSerializer

    queryset = self.filter_queryset(user.notification_set.all())

    page = self.paginate_queryset(queryset)
    if page is not None:
      serializer = self.get_serializer(page, many=True)
      return self.get_paginated_response(serializer.data)

    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)