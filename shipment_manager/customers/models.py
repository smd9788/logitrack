from django.db import models
from django.contrib.auth.models import User
from localflavor.us.models import USStateField, USZipCodeField


class Customer(models.Model):
    # choices

    # database fields
    name = models.CharField(max_length=100, blank=False, unique=True)
    street = models.TextField(max_length=100, blank=False)
    city = models.TextField(max_length=100, blank=False)
    us_state = USStateField(blank=False)
    zip_code = USZipCodeField(blank=False)
    owner = models.ForeignKey(
        User, related_name="customers", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # Meta
    class Meta:
        verbose_name = 'customer'
        verbose_name_plural = 'customers'
