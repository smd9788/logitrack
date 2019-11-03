from rest_framework import viewsets, permissions
from customers.models import Customer
from .serializers import CustomerSerializer

# Lead Viewset
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CustomerSerializer