from rest_framework.serializers import ModelSerializer
from apps.notification.models import Nofification

class NotificationSerializer(ModelSerializer):
  class Meta:
    model = Nofification
    fields = '__all__'