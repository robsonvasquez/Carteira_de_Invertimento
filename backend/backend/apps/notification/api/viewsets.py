from rest_framework.viewsets import ModelViewSet
from apps.notification.api.serializers import NotificationSerializer
from apps.notification.models import Nofification

class NotificationViewSet(ModelViewSet):
  queryset = Nofification.objects.all()
  serializer_class = NotificationSerializer
