from rest_framework.viewsets import ModelViewSet
from apps.notification.api.serializers import NotificationSerializer
from apps.notification.models import Notification

class NotificationViewSet(ModelViewSet):
  queryset = Notification.objects.all()
  serializer_class = NotificationSerializer
