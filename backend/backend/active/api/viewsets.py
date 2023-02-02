from rest_framework.viewsets import ModelViewSet
from active.api.serializers import ActiveSerializer
from active.models import Active

class ActiveViewSet(ModelViewSet):
  queryset = Active.objects.all()
  serializer_class = ActiveSerializer
