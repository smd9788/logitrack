from django.db import models
from localflavor.us.models import USStateField, USPostalCodeField

class Customer(models.Model):
    # choices

    # database fields
    name = models.CharField(max_length=100, blank=False, unique=True)
    street = models.TextField(max_length=100, blank=False)
    city = models.TextField(max_length=100, blank=False)
    state = USStateField(blank=False)
    postal_code = USPostalCodeField(blank=False)
    created_at = models.DateTimeField(auto_now_add=True)

    # Meta
    class Meta:
        verbose_name = 'customer'
        verbose_name_plural = 'customers'