from rest_framework.viewsets import ModelViewSet
from apps.user.api.serializers import UserSerializer
from apps.user.models import User

class UserViewSet(ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
