from rest_framework.viewsets import ModelViewSet
from apps.active.api.serializers import ActiveSerializer
from apps.active.models import Active

class ActiveViewSet(ModelViewSet):
  queryset = Active.objects.all()
  serializer_class = ActiveSerializer
